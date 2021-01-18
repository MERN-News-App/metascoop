const cors = require('cors');
const express = require('express');
const expressSession = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(expressSession);
const dotenv = require('dotenv').config()
const app = express()
const passport = require("passport");


//ROUTES
// const authRouter = require("./routes/auth_routes");



// import postRoutes from './routes/posts.js';

//APP
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use(cors())



require('./middleware/passport.js')
app.use(passport.initialize());
app.use(passport.session());




//DB
const CONNECTION_URL = 'mongodb+srv://Benjamin:Digitor123$@mernnews.hfgdh.mongodb.net/mernDB?retryWrites=true&w=majority'
mongoose.connect(process.env.DATABASE || CONNECTION_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex:true  })
    .then(() => console.log("Successfully connected to Mongoose Atlas"))
    .catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);

// app.use('/posts', postRoutes)



const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))





// app.use('/user', authRouter);