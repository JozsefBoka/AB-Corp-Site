import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'a44cc6ui', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  // todo shoudl probably use cdn for prod
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2021-03-25'//'2022-06-31'
})