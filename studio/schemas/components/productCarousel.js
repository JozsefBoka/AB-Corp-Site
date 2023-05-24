export default {
    name: "productCarousel",
    type: "object",
    title: "Product Carousel",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title*',
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
            name: 'products',
            type: 'array',
            title: 'Products*',
            of: [
                {
                    name: 'product',
                    type: 'object',
                    title: 'Product',
                    fields: [
                        {
                            name: 'name',
                            type: 'string',
                            title: 'Product Name*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'Product URL*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Product Image*',
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
                        }
                    ]
                }
            ],
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
                title: "Product Carousel",
                subtitle: title,
            }
        },
    }
}
