const {weather, location} = require("../constants/weather")

const buildWeatherCurrentPattern = (key) => `${weather.CURRENT}-${location.LOCATION}-${key}`
const buildWeatherForecastPattern = (key) => `${weather.FORECAST}-${location.LOCATION}-${key}`


module.exports = {
	buildWeatherCurrentPattern,
	buildWeatherForecastPattern
}