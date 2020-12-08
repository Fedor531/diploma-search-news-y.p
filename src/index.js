import './index.css'
import NewsApi from './scripts/modules/NewsApi'
import NewsCardList from './scripts/components/NewsCardList'
import NewsCard from './scripts/components/NewsCard'
import DataStorage from './scripts/modules/DataStorage'
import { createTimeFormat } from './scripts/utils/helpers'

const preloader = document.querySelector('.preloader')
const searchResultsContainer = document.querySelector('.search-results')
const newsCardsContainer = document.querySelector('.cards')
const nothingFoundContainer = document.querySelector('.nothing-found')
const nothingFoundServerContainer = document.querySelector('.nothing-found-server')

const searchForm = document.querySelector('.search-news__form')
const searchInput = document.querySelector('.search-news__input')
const showMoreCardsButton = document.querySelector('.search-results__show-more-button')

const newsApiConfig = {
  apiKey: 'a3d7340b4fb145859582c09cb7e3de16',
  pageSize: 100,
  totalDayNews: 7
}

const api = new NewsApi(newsApiConfig)
const dataStorage = new DataStorage()
const buildCardItem = (cardData) => new NewsCard(cardData, createTimeFormat)
const newsCardList = new NewsCardList(newsCardsContainer, buildCardItem, showMoreCardsButton)


function renderState(state) {
  switch (state) {
    case 'loading':
      preloader.setAttribute('style', 'display:block')
      nothingFoundContainer.setAttribute('style', 'display:none')
      searchResultsContainer.setAttribute('style', 'display:none')
      nothingFoundServerContainer.setAttribute('style', 'display:none')
      break;
    case 'nothing found':
      nothingFoundContainer.setAttribute('style', 'display:block')
      break;
    case 'card ready':
      searchResultsContainer.setAttribute('style', 'display:block')
      break;
    case 'error':
      nothingFoundServerContainer.setAttribute('style', 'display:block')
      break;
    case 'end':
      preloader.setAttribute('style', 'display:none')
      break;
  }
}

// Функция поиска новостей
function seacrhNews(event) {
  event.preventDefault()
  renderState('loading')
  const searchTextValue = searchInput.value.trim()

  api.getNews(searchTextValue)
    .then((data) => {
      dataStorage.setData({ searchValue: searchTextValue, data })
      const cards = data.articles
      // Проверка на отсутствие карточек
      if (cards.length === 0) {
        renderState('nothing found')
      } else {
        newsCardList.renderCards(cards)
        renderState('card ready')
      }
    })
    .catch((err) => {
      renderState('error')
      console.log(err)
    })
    .finally(() => {
      renderState('end')
    })
}

// Функция вывода дополнительных карточек с новостями
function showMoreCards() {
  newsCardList.renderCards()
}


// Слушатели
showMoreCardsButton.addEventListener('click', showMoreCards)
searchForm.addEventListener('submit', seacrhNews)
