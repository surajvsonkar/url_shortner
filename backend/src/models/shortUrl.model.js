import mongoose, { Mongoose } from "mongoose";

const shortUrlSchema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

const shortUrl = mongoose.model("ShortUrl", shortUrlSchema)

export default shortUrl;