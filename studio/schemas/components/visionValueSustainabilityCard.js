export default {
    title: "Vision Value Sustainability Card",
    name: "visionValueSustainabilityCard",
    type: "object",
    fields: [
        {
            name: 'cardImage',
            type: 'image',
            title: 'Card Image*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'cardTitle',
            type: 'string',
            title: 'Card Title*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'cardText',
            type: 'string',
            title: 'Card Text*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'btnLink',
            type: 'url',
            title: 'Button Link*',
            validation: Rule => Rule.required().error('Field is required.')
        }
    ],
    preview: {
        select: {
            title: 'heading'
        },
        prepare({title}) {
            return {
                title: "Vision Values Sustainability Card",
                subtitle: title,
            }
        },
    }
}
