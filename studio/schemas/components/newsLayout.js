export default {
    name: "newsLayout",
    type: "object",
    title: "News Layout",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title*',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: "filters",
            type: "array",
            title: "Article filters",
            of: [
                { type: "string" }
            ]
        },
        {
            name: "content",
            type: "pageBuilder"
        },
        {
            name: "contentGrid",
            type: "array",
            title: "Content Grid",
            description: "Select at which row do you want the page builder components to render.",
            of: [
                { type: "number" }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({title}) {
            return {
                title: "News Layout",
                subtitle: title,
            }
        },
    }
}
