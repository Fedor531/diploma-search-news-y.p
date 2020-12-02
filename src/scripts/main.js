import '../pages/index.css'
import NewsApi from './modules/NewsApi'
import NewsCardList from './components/NewsCardList'


const newsApiConfig = {
  apiKey: 'a3d7340b4fb145859582c09cb7e3de16',
  pageSize: 100
}

const $newsCardsContainer = document.querySelector('.cards')

const newsCardList = new NewsCardList($newsCardsContainer)
const api = new NewsApi(newsApiConfig)

api.getNews('Федя')
  .then((res) => {
    console.log(res)
    const cards = res.articles
    newsCardList.renderCards(cards)
  })
  .catch((err) => console.log(err))
