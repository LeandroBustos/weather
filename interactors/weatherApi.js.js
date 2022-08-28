//UTILS
const { createGetRequest } = require("../utils/createAxiosRequest")

const config = require("../config")

const baseGetRequest = createGetRequest(`https://api.openweathermap.org/data/2.5`)
const getCurrentWeather = (params) => baseGetRequest(`/weather${params}&appid=${config.WEATHER_API.KEY}`)
const getCityLocation = (cityName) => baseGetRequest(`/weather?q=${cityName},${config.WEATHER_API.COUNTRY_CODE}&appid=${config.WEATHER_API.KEY}`)
const getForecastWeather = (params) => baseGetRequest(`/forecast${params}&appid=${config.WEATHER_API.KEY}`)


module.exports = {
	getCurrentWeather,
	getCityLocation,
	getForecastWeather
}