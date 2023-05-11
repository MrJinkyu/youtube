import axios from 'axios';

export default class FakeYoutubeClient{

    async channels(){
        return axios.get('/videos/channel.json');
    }

    async search(params){
        const isRelated = params.relatedToVideoId;
        console.log(isRelated);
        return axios.get(`/videos/${isRelated ? 'related':'search'}.json`);
    }

    async videos(){
        return axios.get('/videos/popular.json');
    }
}