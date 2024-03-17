const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth')
const canView = require('../util/can-view');
const canRegistrar = require('../util/can-registrar');
const fanController = require('../controllers/fan.controller');

router.get('/fan', isAuth, canRegistrar, fanController.get_fans);
router.post('/fan', isAuth, canRegistrar, fanController.post_fans);
router.get('/:idfans', isAuth, canView, fanController.get_root);
router.get('/', isAuth, fanController.get_root);

module.exports = router;
