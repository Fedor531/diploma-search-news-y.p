import '../pages/index.css'
import NewsApi from './modules/NewsApi'
import NewsCardList from './components/NewsCardList'
import NewsCard from './components/NewsCard'


const newsApiConfig = {
  apiKey: 'a3d7340b4fb145859582c09cb7e3de16',
  pageSize: 100
}

const $newsCardsContainer = document.querySelector('.cards')

const buildCardItem = (cardData) => new NewsCard(cardData)

const newsCardList = new NewsCardList($newsCardsContainer, buildCardItem)
const api = new NewsApi(newsApiConfig)

api.getNews('Федя')
  .then((res) => {
    console.log(res)
    renderLoading(true)
    const cards = res.articles
    newsCardList.renderCards(cards)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    renderLoading(false)
  })

const preloader = document.querySelector('.preloader')
const searchResultsContainer = document.querySelector('.search-results')


function renderLoading(isLoading) {
  if (isLoading) {
    preloader.setAttribute('style', 'display:block')
    searchResultsContainer.setAttribute('style', 'display:none')
  } else {
    preloader.setAttribute('style', 'display:none')
    searchResultsContainer.setAttribute('style', 'display:block')
  }
}

