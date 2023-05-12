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
            <article className={styles.video}>
                <div className={styles.play}>
                    <iframe 
                        id="player"
                        type="text/html"
                        width="100%"
                        height="640"
                        frameBorderRadius='1rem'
                        src={`https://www.youtube.com/embed/${video.id}`}
                        frameborder="0"
                        frameborderradius="10"
                        title={title}>
                    </iframe>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.title}>{title}</h2>
                    <ChannelInfo id={channelId} name={channelTitle} />
                    <div className={styles.description}>{description}</div>
                </div>
            </article>
            <section className={styles.related}>
                <RelatedVideos id={video.id}/>
            </section>
        </section>
    );
}

