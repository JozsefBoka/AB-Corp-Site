export default {
    name: "visionValueSustainability",
    type: "object",
    title: "Vision Value Sustainability",
    fields: [
        {
            name: 'header',
            type: 'string',
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
            name: 'mainText',
            type: 'blockContent',
            title: 'MainText*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: "visionValueSustainabilityCards",
            type: "array",
            title: "Vision Value Sustainability Cards",
            of: [{ type: 'visionValueSustainabilityCard' }],
            validation: Rule => Rule.min(2).max(2).required().error('Exactly 2 cards are required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            title: 'heading'
        },
        prepare({ title }) {
            return {
                title: "Vision Values Sustainability",
                subtitle: title,
            }
        },
    }
}
