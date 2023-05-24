export default {
    title: 'Video Banner',
    name: 'videoBanner',
    type: 'object',
    fields: [
        {
            name: 'title',
            type: 'blockContent',
            title: 'Title'
        },
        {
            name: 'url',
            type: 'url',
            title: 'YouTube video URL*',
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
        select: {
            title: 'url'
        },
        prepare({title}) {
            return {
                title: "Video Banner",
                subtitle: title,
            }
        },
    }
}