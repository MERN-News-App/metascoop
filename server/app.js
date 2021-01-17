const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config()





// import postRoutes from './routes/posts.js';

//APP
const app = express()
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

//DB
const CONNECTION_URL = 'mongodb+srv://Benjamin:Digitor123$@mernnews.hfgdh.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(process.env.DATABASE || CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to Mongoose Atlas"))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);

// app.use('/posts', postRoutes)



const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))