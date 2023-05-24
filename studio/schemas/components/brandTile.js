export default {
    title: "Brand Tile",
    name: "brandTile",
    type: "object",
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
            name: 'brandLogo',
            type: 'image',
            title: 'Brand Logo*',
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
            name: 'mainText',
            type: 'string',
            title: 'Main Text*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'btnLink',
            type: 'url',
            title: 'Button Link*',
            validation: Rule => Rule.required().error('Field is required.')
        }
    ],
    preview: {
        select: {
            media: 'bgImage'
        },
        prepare({media}) {
            return {
                title: "Brand Tile",
                media: media
            }
        },
    }
}
