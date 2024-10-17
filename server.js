const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db')

//env
dotenv.config({ path:'./config/.env'})

//connect db
connectDB();

const home = require('./routes/homeRoutes')

const app = express();
 
// mount routes
app.use('/api/v1/home',home)

const PORT = process.env.PORT || 5001;

app.listen(
   PORT,
   console.log(`'Server running is ${process.env.NODE_ENV}mode on port ${PORT}'`)
)