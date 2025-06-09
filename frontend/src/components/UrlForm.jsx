import React from 'react';
import { useState } from 'react';
import Button from './Button';
import { axiosInstance } from '../utils/axiosInstance';

const UrlForm = () => {

    const [url, seturl] = useState()
    const [shortUrl, setshortUrl] = useState()

    const handleSubmit = async () => {
        try {
            const {data} = await axiosInstance.post("http://localhost:4000/api/create", {url})
            setshortUrl(data)
        } catch (error) {
            console.log(error)
        }
    }
	return (
		<div className='space-y-4'>
			<div className="">
				<h2 className="text-2xl font-bold text-center">URL Shortener</h2>
				<div className="flex flex-col gap-3">
					<p className="text-sm font-medium text-gray-500">Enter Your URL</p>
					<input
						required
                        value={url}
                        onChange={(e)=> {
                            seturl(e.target.value)
                        }}
						className="p-2 border rounded-md"
						placeholder="https://www.example.com"
					></input>
					<Button
						onclick={handleSubmit}
						type="submit"
						text="Shorten URL"
					/>
				</div>
			</div>

            {shortUrl && (
                <div className='mt-6'>
                <h2 className='text-lg font-semibold mb-2'>
                    Your shortend URL:
                </h2>
                <div className='flex items-center gap-2'>
                <input 
                    type='text'
                    readOnly
                    value={shortUrl}
                    className='flex p-2 border border-gray-100 rounded-l-md bg-gray-100 w-[61%]'
                />
                <button className='text-md font-semibold bg-gray-200 rounded-r-md hover:bg-gray-400 px-4 py-2' onClick={()=> {
                    navigator.clipboard.writeText(shortUrl)
                    alert('link copied to clipboard')
                }}>copy</button>
                </div>

                </div>
            )}

		</div>
	);
};

export default UrlForm;
