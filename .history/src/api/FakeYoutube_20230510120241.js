import axios from 'axios';

export default function FakeYoutube(keyword){
    return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then((res) => res.data.items);
}