const express = require('express')
const app = express()


app.use(express.json())


//routes
app.use("/bounty", require("./routes/bounty.js"))

app.listen(9000, () => {console.log("Server is Running at 9000")})