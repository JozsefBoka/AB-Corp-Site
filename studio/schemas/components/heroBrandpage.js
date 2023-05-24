export default {
    name: "heroBrandpage",
    type: "object",
    title: "Hero Brandpage",
    fields: [
        {
            name: 'title',
            type: 'blockContent',
            title: 'Title*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgImage',
            type: 'image',
            title: 'Background Image*',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative text'
                }
            ],
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: "brandLogo",
            type: "image",
            title: "Brand Logo"
        },
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: "navigation",
            type: "object",
            title: "Navigation Bar",
            fields: [
                {
                    title: 'Navigation Items',
                    name: 'navItems',
                    type: 'array',
                    of: [
                        {
                            name: "navLink",
                            type: "object",
                            title: "Navigation Link",
                            fields: [
                                {
                                    name: 'label',
                                    type: 'string',
                                    title: 'Label'
                                },
                                {
                                    name: 'link',
                                    type: 'link',
                                    title: 'Link'
                                }
                            ]
                        }                
                    ]
                }
            ]
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            media: 'bgImage'
        },
        prepare({media}) {
            return {
                title: "Hero Brandpage",
                media: media
            }
        },
    }
}
