import { postgresAdapter } from '@payloadcms/db-postgres'
// import { payloadCloud } from '@payloadcms/plugin-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'

// import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Properties } from './collections/Properties'

import { en } from 'payload/i18n/en'
import { pt } from 'payload/i18n/pt'
import { es } from 'payload/i18n/es'
import { tr } from 'payload/i18n/tr'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Properties],

  i18n: {
    fallbackLanguage: 'en',
    supportedLanguages: { en, pt, es, tr },
  },

  editor: lexicalEditor({}),
  // plugins: [payloadCloud()], // TODO: Re-enable when cloud supports 3.0
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern
  // for this before reaching 3.0 stable

  // sharp,
})
