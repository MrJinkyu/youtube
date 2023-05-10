import { createContext, useContext } from "react";
import FakeYoutubeClient from '';
// import YoutubeClient from '../api/YoutubeClient';
import Youtube from '../api/Youtube';

const YoutubeApiContext = createContext();

const api = new FakeYoutubeClient();
const youtube = new Youtube(api);

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
