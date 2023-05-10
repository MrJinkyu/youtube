import axios from 'axios';

export default class Youtube{
    constructor(){
        this.httpClient = axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params:{key: process.env.REACT_APP_YOUTUBE_API_KEY}
        })
    }
    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(){
        return axios
            .get('/videos/search.json')
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({...item, id: item.id.videoId})))
    }

    async #mostPopular(){
        return axios
            .get('/videos/popular.json')
            .then((res) => res.data.items)
    }
}