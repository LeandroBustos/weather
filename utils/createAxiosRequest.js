const { default: axios } = require("axios")

const createGetRequest = (baseUrl) => {
	return (params) => {
		const url = `${baseUrl}${params || ""}`
		return axios.get(url)
	}
}

module.exports = {
	createGetRequest
}