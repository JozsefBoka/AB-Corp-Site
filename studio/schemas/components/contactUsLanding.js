export default {
    name: 'contactUsLanding',
    type: 'object',
    title: 'Contact Us Landing',
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
            title: 'Background Color'
        },
        {
            name: 'text',
            type: 'blockContent',
            title: 'Text Block*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'contactInfo',
            type: 'object',
            title: 'Contact Info',
            fields: [
                {
                    name: 'title',
                    type: 'string',
                    title: 'Title'
                },
                {
                    name: 'address',
                    type: 'string',
                    title: 'Address'
                },
                {
                    name: 'email',
                    type: 'string',
                    title: 'Email'
                },
                {
                    name: 'phone',
                    type: 'string',
                    title: 'Phone'
                }
            ]
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
                title: "Contact Us Landing",
                subtitle: subtitle,
            }
        },
    }
}