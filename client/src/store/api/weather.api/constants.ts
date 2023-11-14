export const API_KEY = 'ddebbc67cdf5445fb7e111453232208';
export const BASE_URL_WEATHER = 'http://api.weatherapi.com/v1'

export const weatherApiMetods = {
    current: '/current.json',
    forecast: '/forecast.json',
    future: '/future.json',
    IPLookup: '/ip.json'
}

export const weatherApiQueryParams = {
    locationName: 'q=',
    quantityDays: 'days=', // default: 1, max: 3
    language: 'lang=',   // ru

}