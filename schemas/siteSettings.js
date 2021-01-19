export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'object',
  fields: [
    {
      title: 'Site Name',
      name: 'siteName',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string'
    }
  ]
}