export default {
  title: 'Social',
  name: 'social',
  type: 'object',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Url',
      name: 'url',
      type: 'string',
      validation: Rule => Rule.required()
    },
  ]
}