export default {
    name: "progressSection",
    type: "object",
    title: "Progress Section",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Main title*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            hidden: ({ parent, value }) => !value && parent?.imageTile
        },
        {
            name: 'imageTiles',
            type: 'array',
            title: 'Image Tiles',
            of: [
                {
                    name: 'tile',
                    type: 'object',
                    title: 'Tile',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Image'
                        },
                        {
                            name: 'text',
                            type: 'blockContent',
                            title: 'Text Block'
                        }
                    ]
                }
            ],
            hidden: ({ parent, value }) => !value && parent?.image
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
            name: 'progressContainers',
            type: 'array',
            validation: Rule => Rule.length(2).error('Exactly 2 Progress Containers are expected!'),
            title: 'Progress Containers*',
            of: [
                {
                    name: 'progressBox',
                    type: 'object',
                    title: 'Progress Box',
                    fields: [
                        {
                            name: 'year',
                            type: 'string',
                            title: 'Year'
                        },
                        {
                            name: 'percentage',
                            type: 'number',
                            title: 'Percentage'
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title'
                        },
                        {
                            name: 'description',
                            type: 'text',
                            title: 'Description'
                        },
                        {
                            name: 'borderColor',
                            type: 'colorPicker',
                            title: 'Progress border color'
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
            title: 'title',
            icon: 'image'
        },
        prepare({title,icon}) {
            return {
                title: "Progress Section",
                subtitle: title,
                icon: icon
            }
        },
    }
}
