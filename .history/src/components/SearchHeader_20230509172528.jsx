import React, { useEffect, useState } from 'react';
import { BsSearch, BsGithub } from 'react-icons/bs';
import { HiSun } from 'react-icons/hi';
import { SiYoutubestudio } from 'react-icons/si';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styles from './SearchHeader.module.css';

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
        <header className={styles.header}>
            <Link to='/' className={styles.logo}>
                <SiYoutubestudio className={styles.icon}/>
                <h1 className={styles.title}>ReacTube</h1>
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
                    <a href='https://github.com/MrJinkyu?tab=repositories' target='blank'>
                        <BsGithub/>
                    </a>
                </button>
                <button>
                    <HiSun/>
                </button>
            </div>
        </header>
    );
}

