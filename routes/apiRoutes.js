const express = require('express')

const router = express.Router()

const aiController = require('../controllers/openAi.js')

//POST /chat
router.post('/chat', aiController.openAiMain)

module.exports = router