import { generateNanoId } from "../utils/helper.js"
import urlSchema from "../models/shortUrl.model.js"
import { getCustomShortUrl, saveShortUrl } from "../dao/shortUrl.js"

export const createShortUrlWithoutUser = async(url)=> {
    const shortUrl = generateNanoId(7)
    await saveShortUrl(shortUrl,url)
    return shortUrl
}

export const createShortUrlWithUser = async(url, user,slug=null)=> {
    const shortUrl = slug ? slug :  generateNanoId(7)
    const exists = await getCustomShortUrl(slug)
    if(exists) throw new Error("this custom url already exists")
    await saveShortUrl(shortUrl,url,user)
    return shortUrl
}

