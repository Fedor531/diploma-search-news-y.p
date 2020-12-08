export default class CommitCardList {
  constructor(container, buildCardItem) {
    this.container = container;
    this.buildCardItem = buildCardItem;
  }

  _addCard(cardElement) {
    this.container.appendChild(cardElement)
  }

  renderCards(cards) {
    this.container.innerHTML = ''
    cards.forEach((item) => {
      const commitCard = this.buildCardItem(item)
      this._addCard(commitCard.createCardHtml())
    });
  }
}
