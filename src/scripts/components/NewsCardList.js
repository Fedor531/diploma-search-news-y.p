export default class NewsCardList {
  constructor($container) {
    this.$container = $container
  }

  _addCard(placeElement) {
    this.$container.appendChild(placeElement)
  }

  renderCards(cards) {
    cards.forEach(item => {
      console.log(item)
    });
  }

}
