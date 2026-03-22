const express = require("express")

require("dotenv").config()

const app = express()

const PORT = process.env.PORT || 4000


app.listen(PORT , () =>{
    console.log(`APP is running at ${PORT}`);  
})

app.get("/",(req,res)=>{
    res.send("<h1>This is Home page</h1>")
})