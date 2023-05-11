import React from 'react';
import { foramtAgo } from '../util/date';
import styles from './VideoCard.module.css';

export default function VideoCard({video}) {
    const {thumbnails, title, channelTitle, publishedAt} = video.snippet;
    return (
        <li className={styles.card}>
            <img className={styles.img} src={thumbnails.medium.url} alt={title} />
            <div className={styles.description}>
                <p className={styles.title}>{title}</p>
                <p className={styles.channel}>{channelTitle}</p>
                <p className={styles.date}>{foramtAgo(publishedAt,'ko')}</p>
            </div> 
        </li>
    );
}

