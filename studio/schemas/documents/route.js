import { LinkIcon } from '@sanity/icons'

export default {
  name: 'route',
  type: 'document',
  title: 'Route',
  icon: LinkIcon,
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug*',
      validation: Rule => Rule.required().error('Field is required.')
    },
    {
      name: 'page',
      type: 'reference',
      title: 'Page reference*',
      description: 'Select the page that this route should point to',
      to: [
        {
          type: 'page'
        },
        {
          type: 'article'
        }
      ],
      validation: Rule => Rule.required().error('Field is required.')
    },
    // todo
    {
      name: 'includeInSitemap',
      type: 'boolean',
      title: 'Include page in sitemap',
      description: 'For search engines. Will be added to /sitemap.xml',
    },
    {
      name: 'disallowRobots',
      type: 'boolean',
      title: 'Disallow in robots.txt',
      description: 'Hide this route for search engines',
    },
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title'
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      }
    },
  },
}
