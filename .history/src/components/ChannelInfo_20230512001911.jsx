import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './ChannelInfo.module.css';

export default function ChannelInfo({id, name}) {
    const { youtube } = useYoutubeApi();
    const { data:url } = useQuery(['channel',id],() => youtube.channelImgURL(id),{staleTime:1000 * 60 * 5})
    return (
        <div className={styles.info}>
            {url && <img className={styles.img} src={url} alt={name}/>}
            <p className={styles.name}>{name}</p>
        </div>
    );
}

