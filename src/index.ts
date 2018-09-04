require( 'app-module-path' ).addPath(__dirname);
import express from 'express'

import mainRouter from './routes'

const PORT = 8000

const app = express()

app.use(mainRouter)

console.log("Serving on port", PORT)
app.listen(PORT)
