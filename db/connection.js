const mongoose = require("mongoose")


let mongoURI = ""

if(process.env.NODE_ENV === "production"){
    mongoURI = process.env.DB_URL
} else{
    mongoURI = "mongodb://localhost/first-family-api" 
}

mongoose
    .connect(mongoURI,
            { useNewUrlParser: true,
              useUnifiedTopology: true})
    .then(() => {
        console.log("Connected to db: first-family-api")
    })
    .catch((err) =>{
        console.log("Connection Failed.", err)
    })

module.exports = mongoose;