const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ success: true, module: 'orders' }));

module.exports = router;
