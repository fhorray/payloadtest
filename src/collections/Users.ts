import TestComponent from '@/components/TestComponent'
import { email } from 'payload/fields/validations'

import type { CollectionConfig } from 'payload/types'

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
  ],
}
