import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';



export default function Videos() {
    const {youtube} = useYoutubeApi();
    const { keyword } = useParams();
    const { isLoading, error, data:videos } = useQuery(['videos',keyword],async () => youtube.search(keyword))
    return (
        <section>
            {keyword ? `videos🔍 ${keyword}` : 'videos 🔥'}
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong😖</p>}
            {videos && (
                <ul>
                {videos.map((video) => (
                    <VideoCard key={video.id} video={video}/>
                ))}
                </ul>
            )}
        </section>
    );
}

