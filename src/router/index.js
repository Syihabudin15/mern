const express = require('express');
const router = express.Router();
const RouterConf = require('../controllers');

router.get('/', RouterConf.HomeRouter);
router.get('/login', RouterConf.LoginRouter);

module.exports = router;