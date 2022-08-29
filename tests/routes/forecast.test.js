const request = require("../utils/mockApp")

//MOCKS
const {success_data, malformed_data} = require("../mocks/location")

describe("Forecast Endpoint", () => {
	it("GET /Forecast should show current location and weather forecast of 5 days info", async () => {
		const res = await request.get('/v1/forecast')
		expect(res.status).toEqual(200)
		const { body } = res
		expect(body).toHaveProperty("city")
		expect(body).toHaveProperty("weather")
		expect(Array.isArray(body.weather)).toBeTruthy()
	})

	it("GET /Forecast/${city} should show location and weather forecast of 5 days info from selected city", async () => {
		const res = await request.get(`/v1/forecast/${success_data.city}`)
		expect(res.status).toEqual(200)
		const { body } = res
		expect(body).toHaveProperty("city")
		expect(body).toHaveProperty("weather")
		expect(Array.isArray(body.weather)).toBeTruthy()
	})

	it("GET /current/${city} should fail because selected city not found", async () => {
		const res = await request.get(`/v1/forecast/${malformed_data.city}`)
		expect(res.status).toEqual(404)
	})
})