import { createContext, useContext } from "react";
import FakeYoutubeClient from '../api/FakeYoutubeClient';
// import YoutubeClient from '../api/YoutubeClient';
import Youtube from '../api/Youtube';

const YoutubeApiContext = createContext();

// const client = new YoutubeClient();
const client = new FakeYoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
