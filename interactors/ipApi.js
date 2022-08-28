//UTILS
const { createGetRequest } = require("../utils/createAxiosRequest")

const baseGetRequest = createGetRequest(`http://ip-api.com/json/`)
const getCurrentLocation = baseGetRequest

module.exports = {
	getCurrentLocation
}