const express = require('express')

let app = express()

app.use(express.json())
app.use("/", require("./routes/index"))

app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🦑`)
})