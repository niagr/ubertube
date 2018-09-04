import express from 'express'

import * as views from  './views'

const router = express.Router()

// Add routes here
router.get('/healthcheck', views.healthcheck)

export default router
