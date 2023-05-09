import React from 'react';
import { BsGooglePlay, BsSearch, BsGithub } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
export default function SearchHeader() {
    return (
        <header>
            <div className="logo">
                <BsGooglePlay/>
                <h1>ReacTube</h1>
            </div>
            <form>
                <input type="text" />
                <button><BsSearch/></button>
            </form>
            <div className="btns">
                <button><BsGithub/></button>
                <button><HiSun/></button>
            </div>
        </header>
    );
}

