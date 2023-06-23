const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const CHatGPT = require('./api/ChatGPT');
const bodyParser = require('body-parser');

const setUp = () => {
  app.use(cors());
  app.use(bodyParser.json())
  app.use(CHatGPT.router)

  app.listen(PORT, () => {
    console.log(`Server was started on ${PORT}`);
  })
}



setUp();



