import SectionPadding from "../../custom_inputs/SectionPadding"

export default {
    name: "sectionPadding",
    type: "object",
    title: "Section Padding*",
    description: 'Customize the components top and bottom padding for mobile and desktop viewports.',
    fields: [
        {
            name: "paddingTopMobile",
            type: "number",
            title: "Padding Top Mobile*",
            validation: Rule => Rule.required().max(300).error('Field is required and needs a number between 0 - 300')
        },
        {
            name: "paddingTopDesktop",
            type: "number",
            title: "Padding Top Desktop*",
            validation: Rule => Rule.required().max(300).error('Field is required and needs a number between 0 - 300')
        },
        {
            name: "paddingBottomMobile",
            type: "number",
            title: "Padding Bottom Mobile*",
            validation: Rule => Rule.required().max(300).error('Field is required and needs a number between 0 - 300')
        },
        {
            name: "paddingBottomDesktop",
            type: "number",
            title: "Padding Bottom Desktop*",
            validation: Rule => Rule.required().max(300).error('Field is required and needs a number between 0 - 300')
        },
    ],
    inputComponent: SectionPadding,
    initialValue: {
        paddingTopDesktop: 100,
        paddingBottomDesktop: 100,
        paddingTopMobile: 50,
        paddingBottomMobile: 50,
    }
}
