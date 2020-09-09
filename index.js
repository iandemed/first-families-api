const express = require('express')

let app = express()

app.use(express.json())
app.use("/", require("./routes/index"))

app.listen(3000, () => console.log('listening on port 3000'))