export default {
    name: 'articleLanding',
    type: 'object',
    title: 'Article Landing',
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
            title: 'Background Color*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'text',
            type: 'blockContent',
            title: 'Text Block*',
            validation: Rule => Rule.required().error('Field is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            subtitle: 'title'
        },
        prepare({subtitle}) {
            return {
                title: "Article Landing",
                subtitle: subtitle,
            }
        },
    }
}