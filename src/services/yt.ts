import request from 'request-promise-native'
 
export default class Youtube {

    private apiKey: string

    constructor (apiKey: string) {
        this.apiKey = apiKey
    }

    async search (q: string) {
        const data = await request.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${this.apiKey}&q=${q}`)
        return JSON.parse(data)
    }

}