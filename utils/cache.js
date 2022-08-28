const cache = {}

const get = (key) => cache[key]
const put = (key, value) => cache[key] = value



module.exports = {
	get,
	put
}