import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Newsletters } from './collections/Newsletters'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // Database adapter - SQLite for offline development
  db: sqliteAdapter({
    client: {
      url: process.env['DATABASE_URL'] || 'file:./payload.db',
    },
  }),

  // Admin panel configuration
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- St Saviour\'s CMS',
    },
  },

  // Collections
  collections: [
    Users,
    Newsletters,
  ],

  // Rich text editor
  editor: lexicalEditor({}),

  // Server configuration
  serverURL: process.env['NEXT_PUBLIC_SERVER_URL'] || 'http://localhost:3000',

  // TypeScript output path
  typescript: {
    outputFile: path.resolve(dirname, 'lib/payload/types.ts'),
  },

  // Secret for JWT
  secret: process.env['PAYLOAD_SECRET'] || 'your-secret-key-here',

  // Admin route
  routes: {
    admin: '/admin',
  },

  // CORS configuration for cross-origin requests
  cors: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],

  // CSRF configuration for secure cookie handling
  csrf: [
    'http://localhost:3000',
    'http://localhost:3001',
  ],
})
