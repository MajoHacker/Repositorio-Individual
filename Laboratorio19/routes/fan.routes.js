const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')
const fanController = require('../controllers/fan.controller');

router.get('/fan', isAuth, fanController.get_fans);
router.post('/fan', isAuth, fanController.post_fans);
router.get('/:idfans', isAuth, fanController.get_root);
router.get('/', isAuth, fanController.get_root);

module.exports = router;
