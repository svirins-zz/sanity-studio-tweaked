
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
      title: 'Site Description',
      name: 'email',
      type: 'string'
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'string',
      type: 'array',
      of: [{ type: 'social' }]
    }
  ]
}