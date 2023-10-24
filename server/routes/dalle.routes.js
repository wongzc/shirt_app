import express from 'express'
require('dotenv').config();
import OpenAI from 'openai';

const openai = new OpenAI({
     apiKey: process.env.OPENAI_API_KEY
});
dotenv.config()

const router = express.Router()


router.route('/').get((req,res)=>{
    res.status(200).json({message:"hii from routes"})
})



router.route('/').post(async(req,res)=>{
try {
    const{ prompt}=req.body
    const response =await openai.createImage({
        prompt,
        n: 1,
        size:'1024*1024',
        response_format: 'b64_json'
    })

    const image =response.data.data[0].b64_json
res.status(200)({photo:image})
} catch (error){
    console.error(error)
    res.status(500).json({message:"something wrong"})
}
})
export default router
