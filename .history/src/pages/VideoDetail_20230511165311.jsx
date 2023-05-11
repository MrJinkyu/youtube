import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';

export default function VideoDetail() {
    const {state:{video}} = useLocation();
    const {title, channelTitle, description} = video.snippet;
    return (
        <section>
            <article>
            <iframe 
                id="player"
                type="text/html"
                width="100%"
                height="640"
                src={`http://www.youtube.com/embed/${video.id}`}
                frameborder="0"
                title={title}>
                </iframe>
                <div className="description">
                    <h2>{title}</h2>
                    <ChannelInfo id={video.id} name={channelTitle} />
                    <pre>{description}</pre>
                </div>
            </article>
            <section>
                <RelatedVideos id={video.id}/>
            </section>
        </section>
    );
}

