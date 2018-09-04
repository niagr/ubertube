import express from 'express'

import router from './routes'

const PORT = 8000

const app = express()

app.use(router)

console.log("Serving on port", PORT)
app.listen(PORT)
