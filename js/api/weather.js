const BASE_URL = 'api.openweathermap.org/data/2.5';
const API_KEY = '2f361b665f77a643abbb77578da989e0';

function getCurrentWeather (cityId) {
    return fetch(`http://${BASE_URL}/weather?id=${cityId}&appid=${API_KEY}&units=metric&lang=fa`)
        .then (async response => await response.json())
        .catch(error => error);
}


function getFiveDaysWeather (cityId) {
    return fetch(`http://${BASE_URL}/forecast?id=${cityId}&appid=${API_KEY}&units=metric&lang=fa`)
        .then ( async response => await response.json())
        .catch(error => error);

}