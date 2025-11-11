import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig: NextConfig = {
  // Server Actions configuration for Payload CMS
  experimental: {
    serverActions: {
      // Allow Server Actions from localhost:3000 and localhost:3001
      // This fixes the CSRF protection error for Payload admin panel
      allowedOrigins: [
        'localhost:3000',
        'localhost:3001',
        '127.0.0.1:3000',
        '127.0.0.1:3001',
      ],
    },
  },
};

// Wrap config with Payload to ensure compatibility with Payload dependencies
export default withPayload(nextConfig);
