export default {
    name: "galleryCarousel",
    type: "object",
    title: "Gallery Carousel",
    fields: [
        {
            name: 'title',
            type: 'blockContent',
            title: 'Title*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color'
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: 'carouselItems',
            type: 'array',
            title: 'Carousel Images*',
            of: [
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
            ],
            validation: Rule => Rule.min(1).required().error('Minimum 1 image is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Gallery Carousel"
            }
        },
    }
}
