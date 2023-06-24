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
      prompt: `let's play a game i give you these words ${prompt} you should create sentences (sentence if it is one word) with these words ${prompt} but on their places must be this symbol '__'. Here is an example how you should create sentences info from user: 'encount, event' Your output: 1. I __ my friend and we went to the coffee. 2. It was a fantastic __ here was really pleasent. You should keep in mind all these words`
    });

    res.send(completion.data.choices[0].text);


  } catch (error) {
    console.log(error);
  }

})


module.exports = { router }