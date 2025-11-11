/**
 * Payload CMS API Route Handler
 * Handles all Payload API requests including admin panel
 * Route: /api/payload/[...slug]
 *
 * This uses Payload 3.0's official REST handlers with Next.js 15 App Router
 */

export {
  REST_DELETE as DELETE,
  REST_GET as GET,
  REST_PATCH as PATCH,
  REST_POST as POST,
} from '@payloadcms/next/routes'
