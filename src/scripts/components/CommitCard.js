export default class CommitCard {
    constructor(cardData, createTimeFormat) {
        this._cardData = cardData;
        this.createTimeFormat = createTimeFormat
    }

    createCardHtml() {
        const markUp = `
        <li class="slide">
            <div class="slide__container">
              <p class="slide__date">${ this.createTimeFormat(this._cardData.commit.committer.date) }</p>
              <div class="slide__author-container">
                <div class="slide__author-info">
                  <p class="slide__author-name">${ this._cardData.commit.committer.name }</p>
                  <p class="slide__author-email">${ this._cardData.commit.committer.email }</p>
                </div>
              </div>
              <p class="slide__commit-text">${ this._cardData.commit.message }</p>
            </div>
        </li>`

        const element = document.createElement('div');
        element.insertAdjacentHTML('afterbegin', markUp.trim());
        return element.firstElementChild;
    }
}

// <img class="slide__author-avatar" src="${ this._cardData.author.avatar_url }" alt="GitHub avatar"/>
