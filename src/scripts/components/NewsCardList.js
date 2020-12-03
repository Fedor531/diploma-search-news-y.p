export default class NewsCardList {
  constructor($container, buildCardItem) {
    this.$container = $container;
    this.buildCardItem = buildCardItem;
  }

  _addCard(placeElement) {
    this.$container.appendChild(placeElement)
  }

  renderCards(cards) {
    cards.forEach(item => {
      const newsCard = this.buildCardItem(item)
      this._addCard(newsCard.createCardHtml())
    });
  }

}
