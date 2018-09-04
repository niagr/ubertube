import url from 'url'

import request from 'request-promise-native'
 
export default class Youtube {

    private apiKey: string

    private baseUrl = 'https://www.googleapis.com/youtube/v3'

    constructor (apiKey: string) {
        this.apiKey = apiKey
    }

    private async get (apiUrl: string) {
        const data = await request.get(this.baseUrl + apiUrl)
        return JSON.parse(data)
    }

    async search (q: string) {
        return await this.get(`/search?part=snippet&key=${this.apiKey}&q=${q}`)
    }

}