import { getPayload } from 'payload'
import config from '@payload-config'

async function seedAdmin() {
  console.log('Initializing Payload...')

  const payload = await getPayload({
    config,
  })

  console.log('Checking for existing users...')

  const existingUsers = await payload.find({
    collection: 'users',
    limit: 1,
  })

  if (existingUsers.totalDocs > 0) {
    console.log('Users already exist. Skipping seed.')
    process.exit(0)
  }

  console.log('No users found. Creating first admin user...')

  try {
    await payload.create({
      collection: 'users',
      data: {
        email: 'admin@stsaviours.ie',
        password: 'admin123!',
        firstName: 'Admin',
        lastName: 'User',
        roles: ['admin'],
      },
    })

    console.log('Admin user created successfully!')
    console.log('Email: admin@stsaviours.ie')
    console.log('Password: admin123!')
    console.log('Please change this password immediately after first login.')

    process.exit(0)
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  }
}

seedAdmin()
