export default {
    name: 'theme',
    type: 'object',
    title: 'Theme Colors',
    description: 'Choose page colors here, then select which color should be used in each component, light color sections use the font color defined here, dark color section use only white font',
    fields: [
        {
            name: 'light',
            type: 'colorPicker',
            title: 'Light Color',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: 'dark',
            type: 'colorPicker',
            title: 'Dark Color',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: 'accent',
            type: 'colorPicker',
            title: 'Accent Color',
            validation: Rule => Rule.required().warning('Field is required')
        },
        {
            name: 'font',
            type: 'colorPicker',
            title: 'Font Color',
            validation: Rule => Rule.required().warning('Field is required')
        }
    ],
    initialValue: {
        light: '#FFFFFF',
        dark: '#000000',
        accent: '#00E15A',
        font: '#000000',
    }
}
