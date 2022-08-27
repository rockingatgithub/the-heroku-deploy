const express         = require('express');
const router          = express.Router();
const db              = require('../config/mongoose');
//controller for project
const homeController  = require('../controllers/home_controller.js');
console.log('router loaded');


router.use('/',require('./project'));       // route added for project
router.use('/issue',require('./issue'));    // route added for issue
router.use('/label',require('./label'));    // route added for label

module.exports = router;