import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'roles'],
  },
  access: {
    // Allow creation if no users exist (first user), otherwise require admin
    create: async ({ req: { user, payload } }) => {
      if (user) return true
      const users = await payload.find({
        collection: 'users',
        limit: 1,
      })
      return users.totalDocs === 0
    },
    read: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: false,
    },
    {
      name: 'lastName',
      type: 'text',
      required: false,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      required: true,
      defaultValue: ['admin'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Editor',
          value: 'editor',
        },
      ],
      access: {
        // Only admins can modify roles
        update: ({ req: { user } }) => {
          return user?.['roles']?.includes('admin')
        },
      },
    },
  ],
}
