export default {
    name: "quoteSection",
    type: "object",
    title: "Quote Section",
    fields: [
        {
            name: 'text',
            type: 'blockContent',
            title: 'Section text*',
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
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Quote Section"
            }
        },
    }
}
