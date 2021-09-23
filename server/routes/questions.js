const express = require('express');
const questionController = require('../controllers/questionController');


const router = express.Router();

// Get Questions
router.get('/', questionController.questionsGet);

router.post("/", questionController.questionPost);

module.exports = router;