import React from 'react';
import { useLocation } from 'react-router-dom';
import ChannelInfo from '../components/ChannelInfo';
import RelatedVideos from '../components/RelatedVideos';
import styles from './VideoDetail.module.css';

export default function VideoDetail() {
    const {state:{video}} = useLocation();
    const {title, channelId, channelTitle, description} = video.snippet;
    return (
        <section className={styles.detail}>
            <article>
                <iframe 
                    id="player"
                    type="text/html"
                    width="100%"
                    height="640"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    frameBorder="0"
                    title={title}>
                </iframe>
                <div className="description">
                    <h2>{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle} />
                    <pre>{description}</pre>
                </div>
            </article>
            <section>
                <RelatedVideos id={video.id}/>
            </section>
        </section>
    );
}

