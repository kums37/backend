const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ success: true, module: 'subscriptions' }));

module.exports = router;
