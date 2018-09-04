import {Request, Response} from 'express'

export function healthcheck (req: Request, resp: Response) {
    resp.send('ok')
}