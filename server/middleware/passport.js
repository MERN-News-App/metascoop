const password = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user')

passport.use(new LocalStrategy({
    usernameField: 'email'
},
async (email, password, done) => {
    const user = await UserModel.findOne({ email })
    .catch(done);

    if (!user || !user.verifyPasswordSync(password)) {
        return done(null, false);
    }

    return (done, user);
}
))