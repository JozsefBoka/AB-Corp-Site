export default {
    name: 'link',
    type: 'object',
    title: 'Link',
    description: 'Link can be either internal or external filling one field will hide the other.',
    fields: [
      {
        name: 'external',
        type: 'url',
        title: 'URL',
        hidden: ({ parent, value }) => !value && parent?.internal
      },
      {
        name: 'internal',
        type: 'reference',
        to: [{ type: 'route' }],
        hidden: ({ parent, value }) => !value && parent?.external
      }
    ]
  }