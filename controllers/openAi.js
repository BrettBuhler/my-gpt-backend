const { Configuration, OpenAIApi } = require('openai')

const axios = require('axios')

const client = axios.create({
    headers:{'Authorization': `Bearer ${process.env.OPEN_AI_KEY}`}
})