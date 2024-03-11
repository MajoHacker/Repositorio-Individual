const express = require('express');
const router = express.Router();
const fanController = require('../controllers/fan.controller');

router.get('/fan', fanController.get_fans);
router.post('/fan', fanController.post_fans);
router.get('/:idfans', fanController.get_root);
router.get('/', fanController.get_root);

module.exports = router;
