import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv"
dotenv.config("./.env")
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shortUrl.model.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/api", (req,res)=> {
    const {url} = req.body
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema({
        full_url: url,
        short_url: shortUrl
    })
    newUrl.save()
    res.send(nanoid(8))
})

app.listen(4000, ()=> {
    connectDB()
    console.log("server is running on port 4000")
})