import { createContext, useContext } from "react";
// import FakeYoutube from "../api/FakeYoutube";
import Youtube from "../api/Youtube";

const YoutubeApiContext = createContext();

// const youtube = new FakeYoutube();
const youtube = new Youtube();

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider value={{youtube}}>
        {children}
    </YoutubeApiContext.Provider>
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
