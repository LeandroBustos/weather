const express = require("express")
const apiRoutesV1 = require("./routes/apiRoutesV1")
const config = require("./config")

const app = express()

app.use(express.json())
app.use("/v1", apiRoutesV1)

app.listen(config.PORT, () => {
	console.log(`Running on port ${config.PORT}`)
})