export default {
    name: "article",
    type: "document",
    title: "Article",
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Used to set tab title.',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'Used to help SEO',
        },
        {
            name: "themeColors",
            type: "theme"
        },
        {
            name: "content",
            type: "pageBuilder"
        },
        {
            name: "preview",
            type: "object",
            title: "Preview Data",
            description: 'Displayed on article preview tiles.',
            fields: [
                {
                    name: 'category',
                    title: 'Category',
                    type: 'string',
                    description: 'Top Left text',
                },
                {
                    name: 'title',
                    title: 'Title',
                    type: 'string',
                    description: 'Main text',
                },
                {
                    name: 'publishDate',
                    title: 'Publish Date',
                    type: 'date',
                    description: 'Bottom left text',
                },
                {
                    name: 'previewImage',
                    title: 'Preview Image',
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
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
    preview: {
        select: {
            title: 'title'
        }
    }
}
