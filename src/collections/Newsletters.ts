import type { CollectionConfig } from 'payload'

export const Newsletters: CollectionConfig = {
  slug: 'newsletters',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'status', 'subscribedAt'],
  },
  access: {
    // Public can read (for unsubscribe links) and create (for signup)
    read: () => true,
    create: () => true,
    // Only admins can update and delete
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
      index: true,
    },
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
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Unsubscribed',
          value: 'unsubscribed',
        },
        {
          label: 'Bounced',
          value: 'bounced',
        },
      ],
    },
    {
      name: 'interests',
      type: 'select',
      hasMany: true,
      required: false,
      options: [
        {
          label: 'Mass Times',
          value: 'mass',
        },
        {
          label: 'Events',
          value: 'events',
        },
        {
          label: 'Learning Hub',
          value: 'learning',
        },
        {
          label: 'Prayer Resources',
          value: 'prayer',
        },
      ],
    },
    {
      name: 'subscribedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'unsubscribedAt',
      type: 'date',
      required: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      required: false,
      admin: {
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
}
