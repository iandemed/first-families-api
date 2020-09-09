const mongoose = require("mongoose")

mongoose
    .connect("mongodb://localhost/first-family-api",
            { useNewUrlParser: true,
              useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to db: first-family-api")
    })
    .catch((err) =>{
        console.log("Connection Failed.", err)
    })

module.exports = mongoose;