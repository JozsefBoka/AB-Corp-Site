// todo

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      title: 'Homepage',
      name: 'frontpage',
      type: 'reference',
      description: 'Choose homepage for the site.',
      to: { type: 'page' },
      validation: Rule => Rule.required().max(1).warning('Field is required and max homepages is one.')
    },
    {
      title: 'Main navigation',
      name: 'mainNav',
      type: 'array',
      description: 'Default navigation links shown for desktop viewport.',
      of: [
        {
          title: 'Navigation Item',
          name: 'navItem',
          type: 'object',
          fields: [
            {
              title: 'Display name',
              name: 'name',
              type: 'string'
            },
            {
              title: 'Navigation Item link',
              name: 'navLink',
              type: 'link'
            }
          ]
        }
      ],
    },
    {
      title: 'Burger navigation',
      name: 'burgerNav',
      type: 'object',
      fields: [
        {
          title: 'Navigation Items',
          name: 'navItems',
          type: 'array',
          of: [
            {
              title: 'Navigation Item',
              name: 'navItem',
              type: 'object',
              fields: [
                {
                  title: 'Display name',
                  name: 'name',
                  type: 'string'
                },
                {
                  title: 'Navigation Item link',
                  name: 'navLink',
                  type: 'link'
                },
                {
                  title: 'Navigation Item',
                  name: 'secondLevelItems',
                  type: 'array',
                  of: [
                    {
                      title: "Navigation Item",
                      name: "navItem",
                      type: "object",
                      fields: [
                        {
                          title: 'Display name',
                          name: 'name',
                          type: 'string'
                        },
                        {
                          title: 'Navigation Item link',
                          name: 'navLink',
                          type: 'link'
                        },
                        {
                          name: 'image',
                          type: 'image',
                          title: 'Image',
                          options: {
                            hotspot: true,
                          },
                          fields: [
                            {
                              name: 'alt',
                              type: 'string',
                              title: 'Alternative text'
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: 'Social Navigation Items',
          name: 'socialItems',
          type: 'array',
          of: [
            {
              title: 'Navigation Item',
              name: 'navItem',
              type: 'object',
              fields: [
                {
                  title: 'Display name',
                  name: 'name',
                  type: 'string'
                },
                {
                  title: 'Navigation Item link',
                  name: 'navLink',
                  type: 'link'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Navbar Logo'
    }
  ],
};
