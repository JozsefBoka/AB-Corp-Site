export default {
    name: "jobList",
    type: "object",
    title: "Careers Job List",
    fields: [
        {
            name: 'bgColor',
            type: 'bgTheme'
        },
        {
            name: 'jobs',
            type: 'array',
            title: 'Jobs*',
            of: [
                {
                    name: 'jobData',
                    type: 'object',
                    title: 'Job Data',
                    fields: [
                        {
                            name: 'type',
                            type: 'string',
                            title: 'Type',
                        },
                        {
                            name: 'deadLine',
                            type: 'date',
                            title: 'Deadline',
                        },
                        {
                            name: 'brandImage',
                            title: 'Brand Image',
                            type: 'image',
                            options: {
                                hotspot: true,
                            },
                        },
                        {
                            name: 'url',
                            title: 'Url',
                            type: 'url',
                        }
                    ]
                }
            ],
            validation: Rule => Rule.min(1).required().error('Minimum 1 job is required.')
        }
    ],
    initialValue: {
        bgColor: 'light'
    },
    preview: {
        prepare() {
            return {
                title: "Careers Job List"
            }
        },
    }
}
