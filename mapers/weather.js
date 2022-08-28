const mapCityWeather = (cityWeather) => ({
	city: cityWeather.name || cityWeather.city,
	weather: cityWeather.weather
})

module.exports = {
	mapCityWeather
}