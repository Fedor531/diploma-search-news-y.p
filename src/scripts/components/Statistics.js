export default class Statistics {
    constructor(data) {
        this._data = data;
        this._countMentions = 0
        this._days = [
            {
                day: 'вс',
                countNews: 0,
                date: null
            },
            {
                day: 'пн',
                countNews: 0,
                date: null
            },
            {
                day: 'вт',
                countNews: 0,
                date: null
            },
            {
                day: 'ср',
                countNews: 0,
                date: null
            },
            {
                day: 'чт',
                countNews: 0,
                date: null
            },
            {
                day: 'пт',
                countNews: 0,
                date: null
            },
            {
                day: 'сб',
                countNews: 0,
                date: null
            }
        ]
    }

    // Функция подсчета количества упоминаний в загаловках
    _totalMentions() {
        const keyWord = this._data.searchValue
        const arrayCard = this._data.data.articles
        arrayCard.forEach(item => {
            item.title.split(' ').forEach(word => {
                if (word === keyWord) {
                    this._countMentions += 1
                }
            })
            item.description.split(' ').forEach(word => {
                if (word === keyWord) {
                    this._countMentions += 1
                }
            })
        })
    }

    // Функция создания массива данных о количестве поисковых запросов за каждый день
    _setDaysInfoObject() {
        this._days.forEach(day => {
            this._data.data.articles.forEach(item => {
                const date = new Date(item.publishedAt)
                if (day === this._days[date.getDay()]) {
                    this._days[date.getDay()].countNews += 1
                    this._days[date.getDay()].date = date.getDate()
                }
            })
        })

        this._days.push(this._days[0])
        this._days.shift(this._days[0])
    }

    _renderDiagram() {
        this._setDaysInfoObject()
        this._days.forEach(function (item) {
            if (item.date) {
                const diagramDayHtml = `
       <div class="diagram__analytics-day-container">
         <p class="diagram__analytics-day">${ item.date }, ${ item.day }</p>
         <div class="diagram__analytics-result" style="width:${ item.countNews }%"><p class="diagram__analytics-result-number">${ item.countNews }</p></div>
       </div>`

                const element = document.createElement('div');
                element.insertAdjacentHTML('afterbegin', diagramDayHtml.trim());
                document.querySelector('.diagram-days__container').appendChild(element.firstElementChild)
            }
        })
    }


    // Инициализируем данные на страницу
    init() {
        document.querySelector('.analytics__title').textContent = `Вы спросили: «${ this._data.searchValue }»`
        document.querySelector('.analytics__total-news').textContent = `${ this._data.data.totalResults }`
        this._totalMentions()
        document.querySelector('.analytics__total-mentioning').textContent = this._countMentions
        this._renderDiagram()
    }

}
