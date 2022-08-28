const router = require("express").Router()

//ROUTES
const locationRoutes = require("./location")
const currentRoutes = require("./current")
const forecastRoutes = require("./forecast")

router.use("/location", locationRoutes)
router.use("/current", currentRoutes)
router.use("/forecast", forecastRoutes)

router.use((err, req, res, next) => {
	return res.status(err.status).send(err)
})

module.exports = router