export default class NewsApi {
  constructor(config) {
    this.apiKey = config.apiKey
    this.pageSize = config.pageSize
    this._todayDate = null
    this._pastDate = null
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  _setDateInfo() {
    const nowDate = new Date()
    const todayDate = `${nowDate.getFullYear()}-${nowDate.getMonth() + 1}-${nowDate.getDate()}`
    this._todayDate = todayDate

    const pastDate = new Date()
    pastDate.setDate(pastDate.getDate() - 7);
    this._pastDate = `${pastDate.getFullYear()}-${pastDate.getMonth() + 1}-${pastDate.getDate()}`
  }



  getNews(titleNews) {
    this._setDateInfo()
    return fetch(`https://nomoreparties.co/news/v2/everything?q=${titleNews}&from=${this._pastDate}&to=${this._todayDate}&pageSize=${this.pageSize}&apiKey=${this.apiKey}`)
      .then(res => {
        return this._getResponseData(res)
      })
  }
}
