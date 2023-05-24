export default {
    name: "membersLayout",
    type: "object",
    title: "Members Layout",
    fields: [
        {
            name: 'title',
            title: 'Title*',
            type: 'string',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: "filters",
            type: "array",
            title: "Member filters",
            of: [
                { type: "string" }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({title}) {
            return {
                title: "Members Layout",
                subtitle: title,
            }
        },
    }
}
