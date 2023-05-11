import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './RelatedVideos.module.css';
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos} = useQuery(['related',id],() => youtube.channelImgURL(id))
    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong😖</p>}
            {videos && (
                <ul className={styles.videos}>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video}/>
                ))}
                </ul>
            )}
        </>
    );
}

