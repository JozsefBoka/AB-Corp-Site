import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import object and document schemas
import blockContent from './blockContent'
import page from './documents/page'
import siteConfig from './siteConfig'
import route from './documents/route'
import heroHomepage from './components/heroHomepage'
import brandsList from './components/brandsList'
import brandTile from './components/brandTile'
import bigImageWithSmallImagesCarousel from './components/bigImageWithSmallImagesCarousel'
import visionValueSustainability from './components/VisionValueSustainability'
import visionValueSustainabilityCard from './components/visionValueSustainabilityCard'
import link from './objects/link'
import heroBrandpage from './components/heroBrandpage'
import informationSection from './components/informationSection'
import quoteSection from './components/quoteSection'
import videoBannner from './components/videoBannner'
import textBlockSplit from './components/textBlockSplit'
import textBlock from './components/textBlock'
import imageWithDescription from './components/imageWithDescription'
import imageGrid from './components/imageGrid'
import storySection from './components/storySection'
import galleryCarousel from './components/galleryCarousel'
import progressCarousel from './components/progressCarousel'
import progressSection from './components/progressSection'
import bgTheme from './objects/bgTheme'
import bigImage from './components/bigImage'
import productCarousel from './components/productCarousel'
import newsLayout from './components/newsLayout'
import jobList from './components/jobList'
import article from './documents/article'
import articleCategories from './articleCategories'
import articleCategory from './objects/articleCategory'
import theme from './objects/theme'
import pageBuilder from './objects/pageBuilder'
import articlesRow from './components/articlesRow'
import downloadBlock from './components/downloadBlock'
import articleLanding from './components/articleLanding'
import progressTextBlock from './components/progressTextBlock'
import iconRow from './components/iconRow'
import membersLayout from './components/membersLayout'
import member from './documents/member'
import contactUsLanding from './components/contactUsLanding'
import membersCarousel from './components/membersCarousel'
import sectionPadding from './objects/sectionPadding'

// Give schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    siteConfig,
    blockContent,
    route,
    heroHomepage,
    heroBrandpage,
    brandsList,
    brandTile,
    bigImageWithSmallImagesCarousel,
    visionValueSustainability,
    visionValueSustainabilityCard,
    link,
    informationSection,
    quoteSection,
    videoBannner,
    textBlockSplit,
    textBlock,
    imageWithDescription,
    imageGrid,
    storySection,
    galleryCarousel,
    progressCarousel,
    progressSection,
    bgTheme,
    bigImage,
    productCarousel,
    newsLayout,
    membersLayout,
    jobList,
    article,
    articleCategories,
    articleCategory,
    theme,
    pageBuilder,
    articlesRow,
    downloadBlock,
    articleLanding,
    contactUsLanding,
    progressTextBlock,
    iconRow,
    member,
    membersCarousel,
    sectionPadding
  ]),
})
