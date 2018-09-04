require( 'app-module-path' ).addPath(__dirname);

import express from 'express'
import cors from 'cors'

import mainRouter from './routes'

const PORT = 8000

const app = express()

app.use(cors())

app.use(mainRouter)

console.log("Serving on port", PORT)
app.listen(PORT)
