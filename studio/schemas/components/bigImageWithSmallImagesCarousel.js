export default {
    name: "bigImageWithSmallImagesCarousel",
    type: "object",
    title: "Big Image With Small Images Carousel",
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme'
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: "bigImageTile",
            type: "object",
            title: "Big Image Tile*",
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
                    name: 'mainText',
                    type: 'string',
                    title: 'Main Text*',
                    validation: Rule => Rule.required().error('Field is required.')
                },
                {
                    name: 'smallText',
                    type: 'string',
                    title: 'Small Text*',
                    validation: Rule => Rule.required().error('Field is required.')
                },
                {
                    name: 'btnLink',
                    type: 'url',
                    title: 'Button Link*',
                    validation: Rule => Rule.required().error('Field is required.')
                }
            ]
        },
        {
            title: "Small Images Carousel",
            name: "carouselTiles",
            type: "array",
            of: [
                {
                    title: "Small Image Tile",
                    name: "carouselItem",
                    type: "object",
                    fields: [
                        {
                            name: 'previewImage',
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
                            name: 'title',
                            type: 'string',
                            title: 'Main Text*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'publishDate',
                            type: 'string',
                            title: 'Small Text*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'btnLink',
                            type: 'url',
                            title: 'Button Link*',
                            validation: Rule => Rule.required().error('Field is required.')
                        }
                    ]
                },
                {
                    type: 'reference',
                    to: { type: 'article' }
                }
            ]
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            title: 'heading',
            media: 'bigImageTile.bgImage'
        },
        prepare({ title, media }) {
            return {
                title: "Big Image With Carousel",
                subtitle: title,
                media: media
            }
        },
    }
}
