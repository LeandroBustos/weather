//CONSTANTS
const { developEnvironemnts } = require("../constants/regexp")

const config = require("../config")

const log = (data) => {
	if (config.ENVIRONMENT.match(developEnvironemnts)) {
		console.log(data)
	}
}

module.exports = {
	log
}