export default class Youtube{
    constructor(apiClient){
        this.apiClient = apiClient;
    }

    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
    }

    async #searchByKeyword(keyword){
        return this.apiClient.search({
            part:'snippet',
            maxResults:25,
            type:'video',
            q:keyword
        })
        .then((res) => res.data.items.map((item) => ({...item,id:item.id.videoId})))
    }

    async #mostPopular(){
        return this.apiClient.videos({
            part:'snippet',
            maxResults:25,
            chart:'mostPopular',
        })
        .then((res) => res.data.items)
    }
}