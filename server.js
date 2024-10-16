const express = require('express');
const dotenv = require('dotenv');

//env
dotenv.config({ path:'./config/.env'})

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(
   PORT,
   console.log(`'Server running is ${process.env.NODE_ENV}mode on port ${PORT}'`)
)