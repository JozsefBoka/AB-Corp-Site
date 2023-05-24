export default {
    name: "storySection",
    type: "object",
    title: "Story Section",
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
            name: 'text',
            type: 'blockContent',
            title: 'Text*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'imagePosition',
            type: 'string',
            title: 'Image Position*',
            options: {
                list: [
                    'left',
                    'right'
                ]
            },
            validation: Rule => Rule.required().error('Field is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Story Section"
            }
        },
    }
}
