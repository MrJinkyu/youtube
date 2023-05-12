import React, { useEffect, useState } from 'react';
import { BsGooglePlay, BsSearch } from 'react-icons/bs';
import { FiSun, FiMoon } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';
import { useNavigate, useParams, Link } from 'react-router-dom';
import styles from './SearchHeader.module.css';
import { useDarkMode } from '../context/DarkModeContext';

export default function SearchHeader() {
    const { darkMode,toggleDarkMode } = useDarkMode();
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
            <div className={styles.btns}>
                    <button className={styles.btn}>
                        <a href="https://github.com/MrJinkyu/youtube" target='blank'>
                            <VscGithubAlt className={styles.github}/>
                        </a>
                    </button>
                    <button className={styles.btn} onClick={toggleDarkMode}>
                        {darkMode && <FiSun className={styles.mode}/>}
                        {!darkMode && <FiMoon className={styles.mode}></FiMoon>}
                    </button>
            </div>
        </header>
    );
}

