import { BlocksFeature, LexicalBlock, lexicalEditor } from '@payloadcms/richtext-lexical'

import type { CollectionConfig } from 'payload/types'
import { isAdmin, isAdminFieldLevel } from '@/access/isAdmin'
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
  labels: {
    singular: { en: 'User', pt: 'Usuário' },
    plural: { en: 'Users', pt: 'Usuários' },
  },

  admin: {
    useAsTitle: 'email',
    // defaultColumns: ['name', 'email']
  },
  auth: true,

  // {
  //   verify: {
  //     generateEmailHTML: ({ req, token, user }) => {
  //       // Use the token provided to allow your user to verify their account
  //       const url = `http://localhost:3000/verify?token=${token}`

  //       return `Hey ${user.email}, verify your email by clicking here: ${url}`
  //     },
  //   },
  // },

  // access: {
  //   create: isAdmin,
  //   read: isAdminOrSelf,
  //   update: isAdminOrSelf,
  //   delete: isAdmin,
  // },

  fields: [
    // Name
    // {
    //   name: 'name',
    //   type: 'text',
    // },

    // Role
    {
      name: 'role',
      label: {
        en: 'Roles',
        pt: 'Funções',
      },
      // Save this field to JWS so we can use from "req.user"
      // saveToJWT: true,
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
      // access: {
      //   create: isAdminFieldLevel,
      //   read: isAdminFieldLevel,
      //   update: isAdminFieldLevel,
      // },
    },
  ],
}
