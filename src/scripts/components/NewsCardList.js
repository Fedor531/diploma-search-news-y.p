export default class NewsCardList {
  constructor($container, buildCardItem) {
    this.$container = $container;
    this.buildCardItem = buildCardItem;
    this._cards = null;
    this._cardNumbers = 3;
  }

  _addCard(cardElement) {
    this.$container.appendChild(cardElement)
  }

  renderCards(cards) {
    this.$container.innerHTML = ''
    if (cards) {
      this._cards = cards
      this._cardNumbers = 3
    }
    this._cards.some((item, index) => {
      const newsCard = this.buildCardItem(item)
      this._addCard(newsCard.createCardHtml())
      if ((index + 1) === this._cardNumbers) {
        this._cardNumbers += 3
        return true
      }
    });
  }

}
