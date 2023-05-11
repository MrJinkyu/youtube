import React from 'react';
import { foramtAgo } from '../util/date';

export default function VideoCard({video}) {
    const {thumbnails, title, channelTitle, publishedAt} = video.snippet;
    return (
        <li>
            <img src={thumbnails.medium.url} alt={title} />
            <div>
                <p>{title}</p>
                <p>{channelTitle}</p>
                <p>{foramtAgo(publishedAt,'ko')}</p>
            </div> 
        </li>
    );
}

