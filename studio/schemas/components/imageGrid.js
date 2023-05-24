export default {
    name: "imageGrid",
    type: "object",
    title: "Image Grid",
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
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: 'images',
            type: 'array',
            title: 'Images',
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
            options: {
                layout: 'grid'
            },
            validation: Rule => Rule.min(4).max(4).required().error('Exactly 4 images are required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Image Grid"
            }
        },
    }
}
