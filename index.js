const express = require('express')

let app = express()

app.use(express.json())

// Allows CORS requests for the GET, POST, PUT, and DELETE methods
let cors = function(request, response, next) {
    response.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
    response.header("Access-Control-Allow-Origin", "*")
    if(request.method == 'OPTIONS') response.end()
    else next()
  }

app.use(cors) 
  
app.use("/", require("./routes/index"))

app.set("port", process.env.PORT || 8080)

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🦑`)
})