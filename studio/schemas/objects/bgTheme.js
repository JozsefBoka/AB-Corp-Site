export default {
    name: 'bgTheme',
    type: 'string',
    title: 'Background Color*',
    description: 'Choose the components background color.',
    options: {
        list: [
            'light',
            'dark'
        ]
    },
    validation: Rule => Rule.required().error('Field is required')
}
