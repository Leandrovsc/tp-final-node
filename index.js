import express from 'express'

const app = express()
const PORT = 3300

app.get('/', (req, res) => {
    res.send('Hello, World!')
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})