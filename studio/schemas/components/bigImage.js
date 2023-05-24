export default {
    name: "bigImage",
    type: "object",
    title: "Big Image",
    fields: [
        {
            name: 'bgImage',
            type: 'image',
            title: 'Background Image*',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    title: 'Alternative text',
                    name: 'alt',
                    type: 'string'
                }
            ],
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        }
    ],
    preview: {
        select: {
            media: 'bgImage'
        },
        prepare({media}) {
            return {
                title: "Big Image",
                media: media
            }
        },
    }
}
