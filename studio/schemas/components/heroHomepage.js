export default {
    name: "heroHomepage",
    type: "object",
    title: "Hero Homepage",
    fields: [
        {
            name: 'title',
            type: 'blockContent',
            title: 'Title*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image*',
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
            name: "logos",
            type: "array",
            title: "Brand Logos",
            of: [
                {
                    name: 'logo',
                    type: 'object',
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'link',
                            type: 'link'
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
            media: 'image'
        },
        prepare({ media }) {
            return {
                title: "Hero Homepage",
                media: media
            }
        },
    }
}
