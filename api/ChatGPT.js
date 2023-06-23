const Router = require('express');
require('dotenv').config();
const router = Router();
const { Configuration, OpenAIApi } = require('openai')


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);


router.post('/chatGPT', async (req, res) => {
  try {
    const { prompt } = req.body;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      temperature: 0.8,
      max_tokens: 100,
      prompt: `give three pet names for ${prompt}`
    });

    res.send(completion.data.choices[0].text);


  } catch (error) {
    console.log(error);
  }

})


module.exports = { router }