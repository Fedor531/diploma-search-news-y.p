export default class Statistics {
  constructor(data) {
    this._data = data;
    this._countMentions = 0
  }

  _totalMentions() {
    const keyWord = this._data.searchValue
    const arrayCard = this._data.res.articles
    arrayCard.forEach(item => {
      if (item.title.includes(keyWord) || item.description.includes(keyWord)) {
        this._countMentions += 1
      }
    })
  }

  init() {
    console.log(this._data)
    document.querySelector('.analytics__title').textContent = `Вы спросили: «${this._data.searchValue}»`
    document.querySelector('.analytics__total-news').textContent = `${this._data.res.totalResults}`
    this._totalMentions()
    document.querySelector('.analytics__total-mentioning').textContent = this._countMentions
    this._renderDiagramDays()
  }


  _renderDiagramDays() {
    const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    days.forEach(day => {
      let newsCountDay = 0
      let dayMounth = null

      this._data.res.articles.forEach(item => {
        const date = new Date(item.publishedAt)
        if (day === days[date.getDay()]) {
          dayMounth = date.getDate()
          newsCountDay += 1
        }
      })

    const diagramDayHtml =  `
    <div class="diagram__analytics-day-container">
      <p class="diagram__analytics-day">${dayMounth}, ${day}</p>
      <div class="diagram__analytics-result" style="width:${newsCountDay}%"><p class="diagram__analytics-result-number">${newsCountDay}</p></div>
    </div>`

    const element = document.createElement('div');
    element.insertAdjacentHTML('afterbegin', diagramDayHtml.trim());
    document.querySelector('.diagram-days__container').appendChild(element.firstElementChild)

    })
  }
}
