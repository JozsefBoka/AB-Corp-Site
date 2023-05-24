export default {
    title: 'Text Block Split',
    name: 'textBlockSplit',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'blockContent',
            title: 'Title',
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
            name: 'textColOne',
            type: 'blockContent',
            title: 'Text Left Column'
        },
        {
            name: 'textColTwo',
            type: 'blockContent',
            title: 'Text Right Column'
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Text Block Split"
            }
        },
    }
}