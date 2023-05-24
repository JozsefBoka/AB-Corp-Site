export default {
    name: "informationSection",
    type: "object",
    title: "Information Section",
    fields: [
        {
            name: 'categories',
            type: 'array',
            title: 'Category Tags',
            of: [{ type: 'string' }],
            hidden: ({ parent, value }) => !value && parent?.downloadable
        },
        {
            name: 'downloadable',
            type: 'array',
            title: 'PDF Files',
            of: [
                {
                    name: 'fileData',
                    type: 'object',
                    title: 'File Data',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'pdfFile',
                            title: 'PDF File',
                            type: 'file',
                        }
                    ]
                }
            ],
            hidden: ({ parent, value }) => !value && parent?.categories
        },
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
            name: 'text',
            type: 'text',
            title: 'Section text*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'infItems',
            type: 'array',
            title: 'Information Items',
            of: [
                {
                    name: 'infItem',
                    type: 'object',
                    title: 'Information Item',
                    fields: [
                        {
                            name: 'smallText',
                            type: 'string',
                            title: 'Small Text'
                        },
                        {
                            name: 'bigText',
                            type: 'string',
                            title: 'Big Text'
                        }
                    ]
                }
            ]
        },
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Information Section"
            }
        },
    }
}
