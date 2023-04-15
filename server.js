const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")

dotenv.config()
app.use(express.json())

PORT = process.env.PORT_NO || 8200

    // relaxing security
    // app.use(cors({
    //     origin: 'https://www.section.io',
    //     origin: ['https://www.section.io', 'https://www.google.com/'],
    //     origin: '*',
    //     allowedHeaders: 'X-Requested-With, Content-Type, Authorization',
    //     methods: 'GET, POST, PATCH, PUT, POST, DELETE, OPTIONS'
    // }))
    
    // parsing to json
    
    // importing routes
    const images = require("./routes/images")
    app.use("/create", images)
    

    // listening app at port no 8000
app.listen(PORT, ()=>{
      console.log("Server connected!")
})