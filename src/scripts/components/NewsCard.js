export default class NewsCard {
    constructor(cardData, createTimeFormat) {
        this._cardData = cardData;
        this.createTimeFormat = createTimeFormat;
    }

    createCardHtml() {
        this._cardImage = this._cardData.urlToImage ? this._cardData.urlToImage : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg';

        const markUp = `
        <a class="card" href="${ this._cardData.url }" target="_blank">
          <img class="card__image" src="${ this._cardImage }" alt="Картинка новости">
          <div class="card__content">
            <p class="card__date">${ this.createTimeFormat(this._cardData.publishedAt) }</p>
            <p class="card__title">${ this._cardData.title }</p>
            <div class="card__subtitle">${ this._cardData.description }</div>
            <p class="card__source">${ this._cardData.source.name }</p>
          </div>
        </a>`;

        const element = document.createElement('div');
        element.insertAdjacentHTML('afterbegin', markUp.trim());
        return element.firstElementChild;
    }
}
