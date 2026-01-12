const express = require('express');
const { applyForJob, getMyApplications } = require('../controllers/applicationController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/apply', protect, applyForJob);
router.get('/my-applications', protect, getMyApplications);

module.exports = router;