import {Request, Response, Router} from 'express'

import Youtube from 'services/yt'

const yt = new Youtube('AIzaSyAVfguRy1_xaKLlMVQCq0PZrZ-IWqqMrD4')

const router = Router()

router.get('/healthcheck', healthcheck)
router.get('/scratchpad', scratchpad)


async function healthcheck (req: Request, resp: Response) {
    resp.send('oks  ')
}

async function scratchpad (req: Request, resp: Response) {
    // resp.send('scratchpad')
    const data = await yt.search('trump')
    resp.json(data)
}

export default router