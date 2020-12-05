export default class NewsCard {
  constructor(cardData) {
    this._cardData = cardData;
  }

  _createTimeFormat(date) {
    const year = date.substr(0, 4)
    let mounth = date.substr(5, 2)
    let day = date.substr(8, 2)

    if(day.startsWith('0')) {
      day = date.substr(9, 1)
    }

    switch (mounth) {
      case '1':
        mounth = 'января'
        break;
      case '2':
        mounth = 'февраля'
        break
      case '3':
        mounth = 'мара'
        break
      case '4':
        mounth = 'апреля'
        break
      case '5':
        mounth = 'мая'
        break
      case '6':
        mounth = 'июня'
        break
      case '7':
        mounth = 'июля'
        break
      case '8':
        mounth = 'августа'
        break
      case '9':
        mounth = 'сентября'
        break
      case '10':
        mounth = 'октября'
        break
      case '11':
        mounth = 'ноября'
        break
      case '12':
        mounth = 'декабря'
        break
    }

    return `${day} ${mounth}, ${year}`
  }

  createCardHtml() {
    this._cardImage = this._cardData.urlToImage ? this._cardData.urlToImage : 'https://i.ytimg.com/vi/3e0FsU1N6OQ/hqdefault_live.jpg'

    const markUp = `
    <div class="card">
      <img class="card__image" src="${this._cardImage}" alt="Картинка новости">
      <div class="card__content">
        <p class="card__date">${this._createTimeFormat(this._cardData.publishedAt)}</p>
        <p class="card__title">${this._cardData.title}</p>
        <div class="card__subtitle">${this._cardData.description}</div>
        <p class="card__source">${this._cardData.source.name}</p>
      </div>
    </div>`;
    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markUp.trim());
    return element.firstElementChild;
  }

}
