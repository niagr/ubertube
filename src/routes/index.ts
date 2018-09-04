import {Router} from 'express'
import utilRouter from './util';

const mainRouter = Router()

mainRouter.use(utilRouter)

export default mainRouter
