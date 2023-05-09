import React, { useEffect, useState } from 'react';
import { BsGooglePlay, BsSearch, BsGithub } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { useNavigate, useParams, Link } from 'react-router-dom';

export default function SearchHeader() {
    const { keyword } = useParams();
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
    useEffect(() => {
        setText(keyword || '');
    },[keyword]);
    return (
        <header>
            <Link to='/'>
                <BsGooglePlay/>
                <h1>ReacTube</h1>
            </Link>
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

