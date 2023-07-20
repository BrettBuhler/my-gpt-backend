const { Configuration, OpenAIApi } = require('openai')
require('dotenv').config()

module.exports = {
    openAiMain: async (req, res) => {
        try {

            const configuration = new Configuration({
                apiKey: process.env.OPEN_AI_API,
            })

            const openai = new OpenAIApi(configuration)
            console.log(req.body)
            const {model, messages, temperature, max_tokens, top_p, frequency_penalty, presence_penalty, stop} = req.body
            if (stop.length === 0) {
                const response = await openai.createChatCompletion({
                    model: model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: max_tokens,
                    top_p: top_p,
                    frequency_penalty: frequency_penalty,
                    presence_penalty: presence_penalty,
                })
                console.log(response.data)
                return res.status(200).json({ message: "success", data: response.data})
            } else {
                const response = await openai.createChatCompletion({
                    model: model,
                    messages: messages,
                    temperature: temperature,
                    max_tokens: max_tokens,
                    top_p: top_p,
                    frequency_penalty: frequency_penalty,
                    presence_penalty: presence_penalty,
                    stop: stop,
                })
                console.log(response.data)
                return res.status(200).json({ message: "success", data: response.data})
            }
        } catch (error) {
            console.error(error)
            return res.status(500).json({message: 'internal server error', error: error})
        }
    }
}