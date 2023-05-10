import { createContext, useContext } from "react";
import FakeYoutubeClient from '';
import Youtube from '../api/Youtube';
import YoutubeClient from '../api/YoutubeClient';

const YoutubeApiContext = createContext();

const api = new YoutubeClient();
const youtube = new Youtube(api);

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
