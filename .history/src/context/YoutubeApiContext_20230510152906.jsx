import { createContext } from "react";
import FakeYoutube from "../api/FakeYoutube";
import Youtube from "../api/Youtube";

const YoutubeApiContext = createContext();

// const youtube = new FakeYoutube();
const youtube = new Youtube();

export function YoutubeApiProvider({children}){
    return <YoutubeApiContext.Provider>
        {children}
    </YoutubeApiContext.Provider>
}