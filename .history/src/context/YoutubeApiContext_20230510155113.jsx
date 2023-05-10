import { createContext, useContext } from "react";

const YoutubeApiContext = createContext();

const api = new FakeYoutubeClient();
const youtube = new Youtube();

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export function useYoutubeApi() {
    return useContext(YoutubeApiContext);
}
