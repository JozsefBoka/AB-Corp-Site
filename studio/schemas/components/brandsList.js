export default {
    name: "brandsList",
    type: "object",
    title: "Brands List",
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: 'bgColor',
            type: 'bgTheme',
            title: 'Background Color*',
            validation: Rule => Rule.required().error('Field is required.')
        },
        {
            name: "brandTiles",
            type: "array",
            title: "Brand Tiles*",
            of: [{ type: 'brandTile' }],
            validation: Rule => Rule.min(1).required().error('Minimum 1 brand tile is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        select: {
            title: 'heading'
        },
        prepare({title}) {
            return {
                title: "Brands List",
                subtitle: title,
            }
        },
    }
}
