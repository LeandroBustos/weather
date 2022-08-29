const request = require("../utils/mockApp")

//MOCKS
const {success_data, malformed_data} = require("../mocks/location")

describe("Current Endpoint", () => {
	it("GET /current should show current location and weather info", async () => {
		const res = await request.get('/v1/current')
		expect(res.status).toEqual(200)
		const { body } = res
		expect(body).toHaveProperty("city")
		expect(body).toHaveProperty("weather")
		expect(Array.isArray(body.weather)).toBeTruthy()
	})

	it("GET /current/${city} should show location and weather from selected city", async () => {
		const res = await request.get(`/v1/current/${success_data.city}`)
		expect(res.status).toEqual(200)
		const { body } = res
		expect(body).toHaveProperty("city")
		expect(body).toHaveProperty("weather")
		expect(Array.isArray(body.weather)).toBeTruthy()
	})

	it("GET /current/${city} should fail because selected city not found", async () => {
		const res = await request.get(`/v1/current/${malformed_data.city}`)
		expect(res.status).toEqual(404)
	})
})