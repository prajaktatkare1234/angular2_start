var express = require('express');
var router = express.Router();
console.log("in index of controller");
router.use('/signUp', require('./signUp'));
router.use('/signIn', require('./signIn'));

// router.use('/userInfo', require('./authenticate'), require('./userInfo'));
// router.use('/logout', require('./logout'));
//
// router.use('/dataCard',require('./authenticate'),require('./dataCard'));
// router.use('/getDatacard',require('./authenticate'),require('./getDatacard'));
// router.use('/updateDatacard',require('./updateDatacard'));
// router.use('/deleteCard',require('./deleteCard'));
// router.use('/reminder',require('./reminder'));
// router.use('/deleteReminder',require('./deleteReminder'));
// router.use('/bgColor',require('./bgColor'));
// router.use('/archive',require('./archive'));
// router.use('/pinup',require('./pinup'));
// router.use('/profilePic',require('./profilePic'));
//
// router.use('/auth/facebook',require('./fb'));
// router.use('/auth/google',require('./google'));
// router.use('/verifyEmail',require('./verifyEmail'));
// router.use('/getLoggers',require('./getLoggers'));

















module.exports = router;
