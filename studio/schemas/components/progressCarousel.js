export default {
    name: "progressCarousel",
    type: "object",
    title: "Progress Carousel",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color*',
            validation: Rule => Rule.required().error('Field is required.')
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
                    name: "slideObject",
                    type: "object",
                    title: "Slide object",
                    fields: [
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image',
                            options: {
                                hotspot: true,
                            }
                        },
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Alternative text'
                        },
                        {
                            name: 'year',
                            type: 'string',
                            title: 'Year'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
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
        select: {
            title: 'title'
        },
        prepare({title}) {
            return {
                title: "Progress Carousel",
                subtitle: title,
            }
        },
    }
}
