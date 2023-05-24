export default {
    name: "imageWithDescription",
    type: "object",
    title: "Image With Description",
    fields: [
        {
            name: 'image',
            type: 'image',
            title: 'Image*',
            options: {
                hotspot: true,
            },
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
            name: 'description',
            type: 'blockContent',
            title: 'Description',
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            media: 'image'
        },
        prepare({media}) {
            return {
                title: "Image With Description",
                media: media
            }
        },
    }
}
