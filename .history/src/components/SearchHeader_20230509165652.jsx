import React from 'react';
import { BsGooglePlay, BsSearch } from 'react-icons/bs';

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

            </div>
        </header>
    );
}

