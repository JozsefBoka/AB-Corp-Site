export default {
    title: 'Text Block',
    name: 'textBlock',
    type: 'object',
    fields: [
        {
            name: 'bgColor',
            type: 'bgTheme'
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: 'text',
            type: 'blockContent',
            title: 'Text Block*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'addPaddingLeft',
            type: 'boolean',
            title: 'Add Padding Left'
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({title}) {
            return {
                title: "Text Block",
                subtitle: title,
            }
        },
    },
    initialValue: {
        bgColor: 'light',
        addPaddingLeft: true
    }
}