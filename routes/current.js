const router = require("express").Router()

//INTERACTORS
const { getCurrentLocation } = require("../interactors/ipApi")
const { getCurrentWeather, getCityLocation } = require("../interactors/weatherApi.js")

//UTILS
const { handleError } = require("../utils/errorHandlers")
const { buildWeatherCurrentPattern } = require("../utils/patternBuilders")
const cache = require("../utils/cache")

//MAPPERS
const { mapCityWeather } = require("../mapers/weather")

//CONSTANTS
const { codeErrors } = require("../constants/errors")

router.get("/", async (req, res, next) => {
	let location = {}
	let weather = {}

	try {
		const { data: locationData } = await getCurrentLocation()
		location = locationData
	} catch (err) {
		return next(handleError(500, err, codeErrors.IP_API_GET_LOCATION_ERROR))
	}

	const cachedCityWeather = cache.get(buildWeatherCurrentPattern(location.city.toLowerCase()))
	if (cachedCityWeather) {
		return res.send(cachedCityWeather)
	}
	
	try {
		const { data: weatherData } = await getCurrentWeather(`?lat=${location.lat}&lon=${location.lon}`)
		weather = weatherData
	} catch (err) {
		return next(handleError(500, err, codeErrors.WEATHER_API_GET_CURRENT_WEATHER_ERROR))
	}

	const cityWeather = mapCityWeather({...location, weather: weather.weather})
	cache.put(buildWeatherCurrentPattern(cityWeather.city.toLowerCase()), cityWeather)
	return res.send(cityWeather)
})

router.get("/:city", async (req, res, next) => {
	const { city } = req.params
	let location = {}
	let weather = {}
	const cachedCityWeather = cache.get(buildWeatherCurrentPattern(city.toLowerCase()))

	if (cachedCityWeather) {
		return res.send(cachedCityWeather)
	}

	try {
		const { data: cityLocationData } = await getCityLocation(city)
		location = cityLocationData
	} catch (err) {
		return next(handleError(500, err, codeErrors.WEATHER_API_GET_CITY_LOCATION_ERROR))
	}
	try {
		const { data: weatherData } = await getCurrentWeather(`?lat=${location.coord.lat}&lon=${location.coord.lon}`)
		weather = weatherData
	} catch (err) {
		return next(handleError(500, err, codeErrors.WEATHER_API_GET_CURRENT_WEATHER_ERROR))
	}

	const cityWeather = mapCityWeather({...location, weather: weather.weather})
	cache.put(buildWeatherCurrentPattern(cityWeather.city.toLowerCase()), cityWeather)
	return res.send(cityWeather)
})

module.exports = router