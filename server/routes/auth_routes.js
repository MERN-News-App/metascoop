
const express = require('express');
const router = express.Router();
const passport = require("passport");
const {  Joi, celebrate,  } = require('celebrate');
const {registerCreate, 
  registerNew , 
  logOut, 
  loginNew, 
  loginCreate, 
  editUser, 
  editUserReq, 
  forgotPassword,
  resetPassword,
  sendResetPassword} = require('../controllers/auth_controller')
const {userValidationRules, validate, accountSettingValidationRules} = require("../middleware/validator")

const User = require('../models/user_model');



//GET Route for Register Page
//router.get('/register',authRedirect, registerNew);

//POST Route for registering and creating a user
router.post('/register', userValidationRules(), validate, registerCreate);

//GET Route for Login page
//router.get("/login", loginNew)

//POST Route for finding the user and logging them in
router.post("/login", celebrate({
    body: {
        email: Joi.string().required(),
        password: Joi.string().required(),
    }}), 
    passport.authenticate('local', {
        session: false
}),loginCreate);


//GET Route for Logout function
router.get('/logout', logOut);

//GET Route for Account Settings Page
router.get("/:username/account-settings", passport.authenticate('jwt', {session: false}),  editUser)
//PATCH Route for Updating the user via account settings
router.patch("/:username/account-settings", accountSettingValidationRules(), validate, editUserReq)

//router.delete("/:name/delete", removeUser)

//POST route for sending password reset link
router.post('/forgot-password', forgotPassword)

//GET route for getting password reset page
router.get('/reset-password', resetPassword)

//PUT route for update password from reset page
router.put('/update-password', sendResetPassword)

const upload = require("../middleware/profile_aws.js");
const singleUpload = upload.any('image');

router.post("/:username/add-profile-picture",  function (req, res) {
    const username = req.params.username;
    //console.log(username)
    const filter = {username: req.params.username}
     singleUpload(req, res, async function (err) {
      if (err) {
        return res.json({
          success: false,
          errors: {
            title: "Image Upload Error",
            detail: err.message,
            error: err,
          },
        });
      }

       let update =  { profile: req.files[0].location };
       //console.log(update)
      await User.findOneAndUpdate(filter, update, {new: true})
        .then((user) => res.status(200).json({ success: true, user: user }) )
        .catch((err) => res.status(400).json({ success: false, error: err }));
    });
  });


module.exports = router