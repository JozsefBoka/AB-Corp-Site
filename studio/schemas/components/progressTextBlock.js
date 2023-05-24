export default {
    name: "progressTextBlock",
    type: "object",
    title: "Progress Text Block",
    fields: [
        {
            name: 'title',
            type: 'string',
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
            name: 'textBlocks',
            type: 'array',
            title: 'Text Blocks*',
            of: [
                {
                    name: 'textBlock',
                    type: 'object',
                    title: 'Text Block',
                    fields: [
                        {
                            name: 'smallText',
                            type: 'string',
                            title: 'Small Text*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title*',
                            validation: Rule => Rule.required().error('Field is required.')
                        },
                        {
                            name: 'text',
                            type: 'blockContent',
                            title: 'Text Block*',
                            validation: Rule => Rule.required().error('Field is required.')
                        }
                    ]
                }
            ],
            valdiation: Rule => Rule.min(2).required().error("Field is required")
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: "Progress Text Block",
                subtitle: title,
            }
        },
    }
}
