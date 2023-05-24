export default {
    name: "membersCarousel",
    type: "object",
    title: "Members Carousel",
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title*",
            validation: Rule => Rule.required().warning("Field is required")
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
            name: "members",
            type: "array",
            title: "Members*",
            of: [
                { type: "reference",to: {type: "member"} }
            ],
            validation: Rule => Rule.min(1).required().error('Minimum 1 member is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            title: "title"
        },
        prepare({title}) {
            return {
                title: "Members Carousel",
                subtitle: title,
            }
        },
    }
}
