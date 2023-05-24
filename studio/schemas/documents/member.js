export default {
    name: 'member',
    type: 'document',
    title: 'Member',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'job',
            type: 'string',
            title: 'Job'
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email'
        },
        {
            name: 'profile',
            type: 'image',
            title: 'Picture',
            options: {
                hotspot: true
            }
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        }
    ],
    preview: {
        select: {
            title: 'name',
            subTitle: 'email'
        }
    },
}
