export default {
    name: "articlesRow",
    type: "object",
    title: "Articles Row",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title*",
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: "articles",
            type: "array",
            title: "Articles*",
            of: [
                {
                    type: 'reference',
                    to: [{type: 'article'}]
                }
            ],
            validation: Rule => Rule.min(3).required().error('Add a minimum of 3 articles')
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
                title: "Article Row",
                subtitle: title,
            }
        },
    }
}
