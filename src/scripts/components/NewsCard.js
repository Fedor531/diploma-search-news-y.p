export default class NewsCard {
  constructor(cardData) {
    this._cardData = cardData;
  }

  createCardHtml() {
    this._cardImage = this._cardData.urlToImage ? this._cardData.urlToImage : './images/card-image1.png'
    this._publishedDay = this._cardData.publishedAt.substr(8, 2)
    const date = new Date()


    const markUp = `
    <div class="card">
      <img class="card__image" src="${this._cardImage}" alt="Картинка новости">
      <div class="card__content">
        <p class="card__date">${this._publishedAt}</p>
        <p class="card__title">${this._cardData.title}</p>
        <p class="card__subtitle">${this._cardData.description}</p>
        <p class="card__source">${this._cardData.source.name}</p>
      </div>
    </div>`;
    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markUp.trim());
    return element.firstElementChild;
  }

}
