export default {
    name: 'downloadBlock',
    type: 'object',
    title: 'Download Block',
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
            name: 'sectionPadding',
            type: 'sectionPadding'
        },
        {
            name: 'files',
            type: 'array',
            title: 'PDF Files*',
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
            validation: Rule => Rule.min(1).required().error('Minimum 1 field is required.')
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
                title: "Download Block",
                subtitle: subtitle,
            }
        },
    }
}
