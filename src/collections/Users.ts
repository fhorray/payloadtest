import { BlocksFeature, LexicalBlock, lexicalEditor } from '@payloadcms/richtext-lexical'

import type { CollectionConfig } from 'payload/types'
import { isAdminFieldLevel } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'

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
    read: isAdminOrSelf,
    update: isAdminOrSelf,
  },

  fields: [
    // Name
    {
      name: 'name',
      type: 'text',
    },

    // Role
    {
      name: 'role',
      // Save this field to JWS so we can use from "req.user"
      saveToJWT: true,
      type: 'select',
      defaultValue: ['editor'],
      options: [
        {
          value: 'admin',
          label: 'Admin',
        },
        {
          value: 'editor',
          label: 'Editor',
        },
        {
          value: 'corretor',
          label: 'Corretor',
        },
        {
          value: 'marketing',
          label: 'Marketing',
        },
        {
          value: 'superintendente',
          label: 'Superintendente',
        },
        {
          value: 'rh',
          label: 'RH',
        },
        {
          value: 'cac',
          label: 'CAC',
        },
      ],
      hasMany: true,

      // Who can Edit this field?
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
    },

    // Bio
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

    // Photo
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
