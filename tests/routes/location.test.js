const request = require("../utils/mockApp")

describe("Location Endpoint", () => {
	it("GET /location should show current location info", async () => {
		const res = await request.get('/v1/location')
		expect(res.status).toEqual(200)
		const { body } = res
		expect(body).toHaveProperty("status")
		expect(body.status).toBe("success")
	})
})