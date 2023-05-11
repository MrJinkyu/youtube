import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './Videos.module.css';


export default function Videos() {
    const { youtube } = useYoutubeApi();
    const { keyword } = useParams();
    const { isLoading, error, data:videos } = useQuery(['videos',keyword],async () => youtube.search(keyword),{staleTime:1000 * 60 * 1})
    return (
        <section className={styles.container}>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong😖</p>}
            {videos && (
                <ul className={styles.videos}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video}/>
                ))}
                </ul>
            )}
        </section>
    );
}

