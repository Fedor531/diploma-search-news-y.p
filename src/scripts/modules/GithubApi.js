export default class GithubApi {
  constructor() {
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getCommits() {
    return fetch(`https://api.github.com/repos/Fedor531/Yandex-diploma-front/commits`)
      .then(res => {
        return this._getResponseData(res)
      })
  }
}
