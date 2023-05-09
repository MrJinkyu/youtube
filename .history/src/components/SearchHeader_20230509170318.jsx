import React, { useState } from 'react';
import { BsGooglePlay, BsSearch, BsGithub } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

export default function SearchHeader() {
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length === 0){
            return ;
        }
        navigate(`/videos/${text}`);
        setText('');
    }
    return (
        <header>
            <div className="logo">
                <BsGooglePlay/>
                <h1>ReacTube</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Search...'
                    value={text}
                    onChange={handleChange}
                />
                <button><BsSearch/></button>
            </form>
            <div className="btns">
                <button>
                    <a><BsGithub/></a>
                </button>
                <button>
                    <HiSun/>
                </button>
            </div>
        </header>
    );
}

