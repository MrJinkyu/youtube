import axios from 'axios';

export default class FakeYoutube{
    async search(keyword){
        return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.data.items);
    }
}