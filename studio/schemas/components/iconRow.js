export default {
    name: "iconRow",
    type: "object",
    title: "Icon Row",
    fields: [
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color'
        },
        {
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: 'icons',
            type: 'array',
            title: 'Icons*',
            of: [
                {
                    name: "icon",
                    type: "object",
                    title: "Icon Row",
                    fields: [
                        {
                            name: 'link',
                            type: 'link'
                        },
                        {
                            name: 'image',
                            type: 'image',
                            title: 'Icon',
                            fields: [
                                {
                                    name: 'alt',
                                    type: 'string',
                                    title: 'Alternative text'
                                }
                            ]
                        }
                    ]
                },
            ],
            validation: Rule => Rule.min(1).required().error('Minimum 1 icon is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Icon Row"
            }
        },
    }
}
