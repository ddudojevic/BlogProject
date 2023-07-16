const express = require("express");
const router = express.Router();

const errorController = require('../controllers/error.controllers');

router.get('*', errorController.getError);

module.exports = router;