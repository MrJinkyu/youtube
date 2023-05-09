import React, { useEffect, useState } from 'react';
import { BsGooglePlay, BsSearch, BsGithub } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
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
                <BsGooglePlay className={styles.icon}/>
                <h1 className={styles.title}>ReacTube</h1>
            </Link>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    className={styles.text}
                    type="text"
                    placeholder='검색'
                    value={text}
                    onChange={handleChange}
                />
                <button className={styles.searchBtn}><BsSearch/></button>
            </form>
            <div className='btns'>
                <span>
                    <button>
                        <a href="https://github.com/MrJinkyu?tab=repositories" target='blank'>
                            <VscGithubAlt/>
                        </a>
                    </button>
                </span>
                <span>
                    <button>
                        <FiSun/>
                    </button>
                </span>
            </div>
        </header>
    );
}

