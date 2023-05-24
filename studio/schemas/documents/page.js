// todo make theme colors required 

export default {
    name: "page",
    type: "document",
    title: "Page",
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
            description: 'Used to help SEO.',
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
            name: 'includeTransNav',
            title: 'Include Transparent Navbar',
            type: 'boolean',
            description: 'Navbar becomes transparant for mobile viewports if true.',
        },
    ]
}
