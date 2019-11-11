import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch("https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=IDR&from=ISK&amount=100", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
            "x-rapidapi-key": "8748ffe5b7msh5358ac3edcfa346p1f8c20jsnead576b03eed"
        }
    }).then(response => response.json());
    yield put({ type: "DATA", json: json });
}
function* actionWatcher() {
    yield takeLatest('GET_CURRENCY', fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
