import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/FakeYoutube';
// import Youtube from '../api/Youtube';


export default function Videos() {
    const { keyword } = useParams();
    const { isLoading, error, data:videos } = useQuery(['videos',keyword],async () => {
        const youtube = new FakeYoutube();
        // const youtube = new Youtube();
        return youtube.search(keyword);
    });
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

