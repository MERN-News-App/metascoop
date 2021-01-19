const cors = require('cors');
const express = require('express');
const expressSession = require("express-session");
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(expressSession);
const dotenv = require('dotenv').config()
const passport = require("passport");
const app = express()


require('./middleware/passport.js')
const authRouter = require('./routes/auth_routes')

app.use(cors())


//DB

mongoose.connect(process.env.DATABASE_URI || CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  })
.then(() => console.log("Successfully connected to Mongoose Atlas"))
.catch((error) => console.log(error.message));
mongoose.set('useFindAndModify', false);




app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(bodyParser.json({ limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    },
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


app.use(passport.initialize())
app.use(passport.session())


//ROUTES
app.use('/auth', authRouter)




const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`)) 


