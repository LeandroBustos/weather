const mapWeatherList = (weatherListData) => {
	weatherListData.list = weatherListData.list.map(weatherList => ({
		weather: weatherList.weather,
		date: weatherList.dt_txt
	}))
	return weatherListData
}

module.exports = {
	mapWeatherList
}