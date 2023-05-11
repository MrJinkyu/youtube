import React from 'react';
import { foramtAgo } from '../util/date';
import styles from './VideoCard.module.css';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({video, type}) {
    const navigate = useNavigate();
    const {thumbnails, title, channelTitle, publishedAt} = video.snippet;
    const handleClick = () => {
        navigate(`/videos/watch/${video.id}`,{state:{video}});
    }
    const isList = type === 'list';
    return (
        <li onClick={handleClick} className={styles.card}>
            <img className={styles.img} src={thumbnails.medium.url} alt={title} />
            <div className={styles.description}>
                <p className={styles.title}>{title}</p>
                <p className={styles.channel}>{channelTitle}</p>
                <p className={styles.date}>{foramtAgo(publishedAt,'ko')}</p>
            </div> 
        </li>
    );
}

