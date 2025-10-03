const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello MongoDB")
})

app.listen(port, ()=> {
    console.log(`Server is running on http://localhost:5000`)
})