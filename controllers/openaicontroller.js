const {Configuration, OpenAIApi} = require('openai')
const dotenv = require("dotenv")

dotenv.config()

const config = new Configuration({
    apiKey: process.env.API_KEY
})
const openai = new OpenAIApi(config)


const generateImg = async (req, res)=>{

const imgSize = req.body.size === 'small' ? "256x256" : req.body.size === "medium" ? "512x512" : "1024x1024";

    try{
        const response = await openai.createImage({
            prompt: req.body.prompt,
            n: 1,
            size: imgSize,
          });
          image_url = response.data.data[0].url;
          res.status(200).json({
            success: true,
            data: image_url
          })

    }catch(error){
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
    }
}

module.exports = {generateImg}