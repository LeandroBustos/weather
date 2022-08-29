const express = require("express")
const apiRoutesV1 = require("./routes/apiRoutesV1")

const app = express()

app.use(express.json())
app.use("/v1", apiRoutesV1)

module.exports = app