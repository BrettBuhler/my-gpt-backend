const express = require('express')

const app = express ()
app.use(express.json())
const apiRoutes = require('./routes/apiRoutes.js')
const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:3000']
}))

app.use('/api', apiRoutes)

const port = process.env.PORT || 5000

try {
    app.listen(port, () => {
        console.log('listening on port:', port)
    })
} catch (error) {
    console.error(error)
}