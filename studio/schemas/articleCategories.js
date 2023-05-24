export default {
    name: "articleCategories",
    type: "document",
    title: "Article Categories",
    fields: [
        {
            name: "categories",
            type: "array",
            title: "Categories",
            of: [
                {
                    type: 'articleCategory'
                }
            ]
        }
    ]
}