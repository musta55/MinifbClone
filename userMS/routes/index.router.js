const express = require('express');
const router = express.Router();
const app=express();
const ctrlUser = require('../controllers/user.controller');
const jwtHelper = require('../config/jwtHelper');

router.post('/authenticate/register', ctrlUser.register);
router.post('/authenticate/login', ctrlUser.authenticate);
router.get('/authenticate/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);


module.exports = router;
