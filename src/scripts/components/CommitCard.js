export default class CommitCard {
  constructor(cardData, createTimeFormat) {
    this._cardData = cardData;
    this.createTimeFormat = createTimeFormat
  }

  createCardHtml() {
    const markUp = `
    <li class="slide glide__slide" style="height: 220px">
    <div class="slide__container">
      <p class="slide__date"></p>
      <div class="slide__author-container">
        <img class="slide__author-avatar" alt="Аватар"/>
        <div class="slide__author-info">
          <p class="slide__author-name"></p>
          <p class="slide__author-email"></p>
        </div>
      </div>
      <p class="slide__commit-text"></p>
    </div>
  </li>`

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', markUp.trim());
    this.cardElement = element.firstElementChild
    this.cardElement.querySelector('.slide__date').textContent = this.createTimeFormat(this._cardData.commit.committer.date)
    this.cardElement.querySelector('.slide__author-avatar').src = this._cardData.author.avatar_url
    this.cardElement.querySelector('.slide__author-name').textContent = this._cardData.commit.committer.name
    this.cardElement.querySelector('.slide__author-email').textContent = this._cardData.commit.committer.email
    this.cardElement.querySelector('.slide__commit-text').textContent = this._cardData.commit.message

    return this.cardElement;
  }
}
