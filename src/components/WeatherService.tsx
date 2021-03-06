// @flow
import CurrentWeather from './CurrentWeather';

// api_key
import ENV from '../../env.json';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = ENV.OWM_API_KEY;

function getCurrentWeatherEndpoint(city: any) {
  return `${BASE_URL}weather?q=${city}&appid=${API_KEY}&lang=ja`;
}

function getCurrentWeather(city: any): Promise<CurrentWeather> {
  const endpoint = getCurrentWeatherEndpoint(city);
  return fetch(endpoint)
    .then((response) => response.json())
    .then((json) => new CurrentWeather(json));
}

export { getCurrentWeather }