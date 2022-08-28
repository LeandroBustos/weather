const {log} = require("./logger")

const handleError = (status, err, code) => {
	const error = {
		status,
		code: code,
		message: err.message,
		stack: err
	}
	log(error)
	delete error.stack
	return error
}

module.exports = {
	handleError
}