const router = require("express").Router()

//INTERACTORS
const { getCurrentLocation } = require("../interactors/ipApi")

//UTILS
const { handleError } = require("../utils/errorHandlers")

//CONSTANTS
const { codeErrors } = require("../constants/errors")

router.get("/", async (req, res, next) => {
	try {
		const { data: location } = await getCurrentLocation()
		return res.send(location)
	} catch (err) {
		next(handleError(500, err, codeErrors.IP_API_GET_LOCATION_ERROR))
	}
})

module.exports = router