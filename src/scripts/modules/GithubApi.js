export default class GithubApi {
    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${ res.status }`);
        }
        
        return res.json();
    }

    getCommits() {
        return fetch(`https://api.github.com/repos/Fedor531/search-news-y.p/commits`)
            .then(res => {
                return this._getResponseData(res);
            })
    }
}
