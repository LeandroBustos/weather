module.exports = {
	PORT: process.env.PORT || 8080,
	ENVIRONMENT: process.env.ENVIRONMENT || "DEVELOPMENT",
	WEATHER_API: {
		KEY: process.env.WEATHER_API_KEY || null,
		COUNTRY_CODE: process.env.WEATHER_API_COUNTRY_CODE || "AR"
	}
}