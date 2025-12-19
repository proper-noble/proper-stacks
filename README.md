# NuxtHub Starter Template

This starter lets you get started with [NuxtHub](https://hub.nuxt.com) in seconds.

- [Documentation](https://hub.nuxt.com)

## Features

- Image upload with [NuxtHub Blob](https://hub.nuxt.com/docs/features/blob) from `hub:blob`
- Save chat messages with [NuxtHub Database](https://hub.nuxt.com/docs/features/database) from `hub:db` (Drizzle ORM)
- Save server redirects with [NuxtHub KV](https://hub.nuxt.com/docs/features/kv) from `hub:kv`
- Cache an API response with [NuxtHub Cache](https://hub.nuxt.com/docs/features/cache)

## Setup

Make sure to install the dependencies with [pnpm](https://pnpm.io).

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

## Deploy

### Netlify

Deploy your application to Netlify with automatic builds from your git repository:

1. **Connect Repository**: Connect your GitHub repository to Netlify
2. **Configure Build Settings**: Netlify will automatically detect the build settings from `netlify.toml`
3. **Set Environment Variables** (if needed for external services):
   - For databases: Consider using [Turso](https://turso.tech/) with `@libsql/client` (already installed)
   - For blob storage: Consider using [Uploadcare](https://uploadcare.com/) or another blob storage provider
   - For KV storage: Consider using [Upstash Redis](https://upstash.com/) (already installed) or Netlify Blobs
   - For caching: Use Netlify's built-in caching capabilities

You can also deploy manually using the Netlify CLI:

```bash
npm run deploy-netlify
```

**Note**: This application uses NuxtHub features (`hub:blob`, `hub:db`, `hub:kv`, `hub:cache`) which are optimized for Cloudflare and Vercel. When deploying to Netlify, you may need to configure alternative storage providers or use Netlify's equivalent services.

### Vercel

On the Vercel dashboard -> Storage, create a Turso SQLite database, Redis database, and Vercel Blob store

```bash
npm run deploy-vercel
```

Link the newly created resources to your project and re-deploy.

You can also connect using your git repository to leverage Vercel's CI/CD pipeline.

### Cloudflare

```bash
npm run deploy-cloudflare
```

Wrangler will create the necessary resources on your Cloudflare account.

You can also connect using your git repository to leverage Cloudflare's CI/CD pipeline.
