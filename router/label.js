const express  = require('express');
const router   = express.Router();
const app      = express();
const db       = require('../config/mongoose');

//controller
const labelController = require('../controllers/label_controller');  // label controller added

//issue router
router.get('/label',labelController.label); // labels route for listing

module.exports = router;