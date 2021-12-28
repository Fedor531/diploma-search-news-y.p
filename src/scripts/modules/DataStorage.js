export default class DataStorage {
    setData(data) {
        localStorage.setItem('data', JSON.stringify(data));
    }

    getData(dataName) {
        const data = localStorage.getItem(dataName);
        return JSON.parse(data);
    }
}
