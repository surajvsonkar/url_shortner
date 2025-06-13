import { getShortUrl } from "../dao/shortUrl.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrl = async(req,res)=> {
    const data = req.body
    let shortUrl;
    if(req.user) {
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug)
    } else {
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.send(process.env.APP_URL + shortUrl)
}

export const redirectFromShortUrl = async(req,res)=> {
    const {id} = req.params
    const url = await getShortUrl(id)
    res.redirect(url.full_url)
}

export const createCustomShortUrl = async(req,res)=> {
    const {url, slug} = req.body
    const shortUrl = await createShortUrlWithUser(url, slug)
    res.status(200).json({
        shortUrl: process.env.APP_URL + shortUrl
    })
}