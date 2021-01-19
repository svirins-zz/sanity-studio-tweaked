import schemaTypes from 'all:part:@sanity/base/schema-type'
// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import siteSettings from './siteSettings'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'iam-sanity',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    siteSettings,
    {
      name: 'page',
      type: 'document',
      title: 'Page',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'isPublished',
          title: 'IsPublished?',
          type: 'boolean',
        },
        {
          name: 'isAtFooter',
          title: 'Is displayed at footer menu?',
          type: 'boolean',
        },
        {
          name: 'Price',
          title: 'price',
          type: 'number',
        },
        {
          name: 'seoTitle',
          title: 'SEO Title',
          type: 'string',
        },
        {
          name: 'seoDescription',
          title: 'SEO Description',
          type: 'string',
        },
        {
          name: 'text',
          title: 'Text',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'image',
          title: 'Svg image (square)',
          type: 'image',
        },
        {
          name: 'date',
          title: 'Date',
          type: 'datetime',
        },
        {
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          source: 'title',
        },
      ],
    },
  ]),
})
