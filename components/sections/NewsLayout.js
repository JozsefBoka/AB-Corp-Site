import { useState, useEffect } from 'react'
import ImageTile from '../ImageTile'
import UnderlinedButton from '../small/UnderlinedButton'
import createFragment from 'react-addons-create-fragment'
import RenderSection from '../RenderSection'

// todo layout looks bad on tablet view when 2 columns becuase we have 3 elements in a row, maybe keep an extra one for tablet only?

const NewsLayout = (props) => {
    const {
        title,
        filters,
        articles,
        content,
        contentGrid,
        themeColors,
        bgColor
    } = props

    // todo readability
    // sections dont get rendered if not enough articles maybe good?
    // todo set filter in url
    const [activeFilter, setActiveFilter] = useState('all')
    const [filteredArticles, setFilteredArticles] = useState([])

    useEffect(() => {
        setFilteredArticles(articles?.reduce((acc, article) => {
            if (article?.page?.preview?.category === activeFilter || activeFilter === 'all') {
                acc.push(article)
            }

            return acc
        }, []))
    }, [activeFilter, articles])

    let lastItemIdx = 0
    let renderedItems = 0

    const renderArticleCards = (cards, to) => {
        let rendered = 0

        return (
            <div className='container'>
                <div className='grid md:grid-cols-2 grid-flow-row xl:grid-cols-3 gap-10 mb-24'>
                    {cards.map((card, idx) => {
                        let preview = card.page.preview

                        if (lastItemIdx <= idx && rendered < to && preview?.category && (preview?.category === activeFilter || activeFilter === 'all')) {
                            if (rendered == to - 1) {
                                lastItemIdx = idx + 1
                            }
                            rendered++
                            renderedItems++
                            return (
                                <ImageTile key={card._key} btnLink={card.slug.current} classNames="mx-auto md:mx-0" {...preview} themeColors={themeColors} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }

    const renderRows = () => {
        let result = {}
        // sort contentGrid
        let sortedGrid = contentGrid.sort(function (a, b) {
            return a - b;
        });

        // render rows until grid says a component should be rendered
        // let rows = filteredArticles.length / 3
        let lastRenderedGrid = 0
        let lastRenderedComponent = 0

        let i = 0
        // todo renders items until rendered items equals array length even when filter applied and only one item needs render
        while (filteredArticles.length > renderedItems && i < 10) {
            if (sortedGrid[lastRenderedGrid] == i) {
                result['articlerow-' + i] = <RenderSection section={content[lastRenderedComponent]} themeColors={themeColors} />
                lastRenderedGrid++
                lastRenderedComponent++
            } else {
                result['articlerow-' + i] = renderArticleCards(filteredArticles, 3)
            }

            i++
        }

        return (
            <>
                {createFragment(result)}
            </>
        )
    }

    return (
        <>
            <div className='container'>
                <div className="">
                    <div className='flex flex-col md:flex-row justify-between mb-28'>
                        <h1 className='uppercase pb-12 md:pb-0'>{title}</h1>
                        <div className='flex items-center overflow-x-scroll no-scrollbar'>
                            <UnderlinedButton active={"all" === activeFilter} type="button" text="All" color="black" onClick={() => setActiveFilter('all')} />
                            {filters?.map(filter => <UnderlinedButton key={filter._key} active={filter === activeFilter} classes="whitespace-nowrap" type="button" text={filter} color="black" onClick={() => setActiveFilter(filter)} />)}
                        </div>
                    </div>
                </div>
            </div>
            {renderRows()}
        </>
    )
}

export default NewsLayout
