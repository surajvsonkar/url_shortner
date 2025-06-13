import express from "express";
import { nanoid } from "nanoid";
import dotenv from "dotenv"
dotenv.config("./.env")
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/shortUrl.model.js"
import shortUrl from "./src/routes/shortUrl.route.js";
import authRoute from "./src/routes/auth.routes.js"
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import cors from "cors"

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api/auth", authRoute)
app.use("/api/create", shortUrl )
app.use("/:id", redirectFromShortUrl)

app.listen(4000, ()=> {
    connectDB()
    console.log("server is running on port 4000")
})