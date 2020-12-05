import './index.css'
import NewsApi from './scripts/modules/NewsApi'
import NewsCardList from './scripts/components/NewsCardList'
import NewsCard from './scripts/components/NewsCard'

const $preloader = document.querySelector('.preloader')
const $searchResultsContainer = document.querySelector('.search-results')
const $newsCardsContainer = document.querySelector('.cards')
const $nothingFoundContainer = document.querySelector('.nothing-found')

const $searchForm = document.querySelector('.search-news__form')
const $searchInput = document.querySelector('.search-news__input')
const $showMoreCardsButton = document.querySelector('.search-results__show-more-button')

const newsApiConfig = {
  apiKey: 'a3d7340b4fb145859582c09cb7e3de16',
  pageSize: 100
}
console.log('меня видно')

const buildCardItem = (cardData) => new NewsCard(cardData)

const newsCardList = new NewsCardList($newsCardsContainer, buildCardItem)
const api = new NewsApi(newsApiConfig)

function seacrhNews(event) {
  event.preventDefault()
  $preloader.setAttribute('style', 'display:block')
  $nothingFoundContainer.setAttribute('style', 'display:none')
  $searchResultsContainer.setAttribute('style', 'display:none')
  api.getNews($searchInput.value.trim())
    .then((res) => {
      console.log(res)
      const cards = res.articles
      if (cards.length === 0) {
        $nothingFoundContainer.setAttribute('style', 'display:block')
       } else {
        localStorage.setItem('myCat', 'Tom');
        newsCardList.renderCards(cards)
        $searchResultsContainer.setAttribute('style', 'display:block')
       }
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      $preloader.setAttribute('style', 'display:none')
    })
}

function showMoreCards() {
  newsCardList.renderCards()
}


$showMoreCardsButton.addEventListener('click', showMoreCards)
$searchForm.addEventListener('submit', seacrhNews)


