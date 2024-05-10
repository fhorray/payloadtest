import { BlockTest } from '@/blocks/blocks-test'
import { CollectionConfig } from 'payload/types'

export const Properties: CollectionConfig = {
  slug: 'imoveis',
  labels: {
    plural: {
      en: 'Properties',
      pt: 'Imóveis',
    },
    singular: {
      en: 'Property',
      pt: 'Imóvel',
    },
  },
  admin: {
    useAsTitle: 'titulo',
    // This options create a collection group & organize inside the menu sidebar. like the Collections One
    // group: { en: 'Collections', pt: 'Coleções' },
  },
  fields: [
    // Title - Text
    {
      name: 'titulo',
      type: 'text',
      label: {
        en: 'Title',
        pt: 'Titulos',
      },
      admin: {
        placeholder: { en: 'Enter title', pt: 'Insira o titulo' },
      },
      localized: true,
    },

    // Description - Rich Text
    {
      name: 'descricao',
      label: {
        en: 'Description',
        pt: 'Descrição',
      },
      localized: true,
      type: 'richText',
    },

    // Status - Select
    {
      name: 'status',
      type: 'select',
      options: ['Em Obras', 'Pronto Para Morar', 'Lançamento'],
    },

    // Plantas - Array
    {
      name: 'plantas',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    // Blocks
    {
      name: 'options',
      type: 'blocks',
      blocks: [BlockTest],
    },

    // Checkbox
    {
      name: 'ativarSecao',
      label: {
        value: 'Activate Section Below',
        pt: 'Ativar Seção Abaixo',
        en: 'Activate Section Below',
      },
      type: 'checkbox',
    },

    // Code
    {
      name: 'code',
      label: 'Código',
      type: 'code',
      admin: {
        language: 'javascript',

        // Com base no name: 'ativarSecao' do field acima deste, esta sendo feito uma condição no if abaixo.
        // https://payloadcms.com/docs/fields/overview#conditional-logic
        condition: (data, siblingData, { user }) => {
          // Se algum outro field nao tiver nenhum dado, ele retornara undefined ou 0, oque seria falsy values, exemplo o data.options que tem como valor 0.
          // console.log('########## DATA: ', data)

          // Se o field for true renderiza.
          if (data.ativarSecao) {
            return true
          } else {
            return false
          }
        },
      },
    },

    // JSON
    {
      name: 'json',
      label: 'JSON Format',
      type: 'json',
    },

    // Collapsible
    {
      label: ({ data }) => {
        return data?.title || 'Untitled'
      },
      type: 'collapsible',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'colapseBlock',
          type: 'blocks',
          blocks: [BlockTest],
        },
      ],
    },

    // Date && Row
    {
      type: 'row',
      fields: [
        {
          name: 'dateField',
          label: 'Date Field - Hour',
          type: 'date',
          admin: {
            // https://payloadcms.com/docs/fields/overview#admin-config
            width: '50%',
            date: {
              pickerAppearance: 'timeOnly',
            },
          },
        },
        {
          name: 'dateFieldTwo',
          label: 'Date Field - Month',
          type: 'date',
          admin: {
            width: '50%',
            date: {
              pickerAppearance: 'monthOnly',
            },
          },
        },
      ],
    },

    // Email, Number, Point & Group Field
    // Esse field "pagemeta", é um grupo e dentro dele tem os campos Email, number e Point.
    // https://payloadcms.com/docs/fields/group
    {
      name: 'pageMeta',
      type: 'group',
      fields: [
        // Email
        {
          name: 'email',
          label: 'Email Field',
          type: 'email',
          required: true,
        },

        // Number
        {
          name: 'number',
          label: 'Number Field',
          type: 'number',
          admin: {
            step: 1,
          },
        },
        // Number with hasMany
        {
          name: 'numberHasMany',
          label: 'Number Field - hasMany',
          type: 'number',
          hasMany: true,
          admin: {
            step: 1,
          },
        },

        // Point
        {
          name: 'pointer-field',
          label: 'Point Field',
          type: 'point',
        },
      ],
    },

    // Radio Group
    // https://payloadcms.com/docs/fields/radio
    {
      name: 'colorOptions',
      type: 'radio',

      options: [
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Yellow',
          value: 'yellow',
        },
      ],
      admin: {
        layout: 'vertical',
      },
    },

    // Relationship
    {
      name: 'emailRelation',
      label: 'Relationship Field',
      type: 'relationship',
      // O relationTo, deve ser referenciado a uma collection!
      relationTo: ['users'],
    },
  ],
}
