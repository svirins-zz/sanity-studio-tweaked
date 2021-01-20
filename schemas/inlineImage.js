export default {
  title: 'InlineImage',
  name: 'inlineImage',
  type: 'image',
  fields: [
    {
      type: 'text',
      name: 'alt',
      title: 'Alternative text',
      description: `Please, provide an alternative description`,
      options: {
        isHighlighted: true,
      },
    },
  ],
}