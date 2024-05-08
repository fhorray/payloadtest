import TestComponent from '@/components/TestComponent'
import { BlocksFeature, LexicalBlock, lexicalEditor } from '@payloadcms/richtext-lexical'
import { email } from 'payload/fields/validations'
import payload from 'payload'

import type { CollectionAfterReadHook, CollectionConfig } from 'payload/types'

const QuoteBlock: LexicalBlock = {
  slug: 'Quote', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    // required
    {
      name: 'quoteHeader',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteText',
      type: 'text',
    },
  ],
}

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: ({ req: { user }, id }) => {
      return true
    },
  },

  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'role',
      type: 'select',
      options: ['Admin', 'Corretor', 'Marketing', 'Superintendente', 'RH', 'CAC'],
      hasMany: true,
    },
    {
      name: 'bio',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [QuoteBlock],
          }),
        ],
      }),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
