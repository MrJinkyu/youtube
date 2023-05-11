import React from 'react';

export default function VideoCard({video}) {
    const {thumbnails, title, channelTitle, publishedAt} = video.snippet;
    return (
        <li>
            <img src={thumbnails.medium.url} alt={title} />
            <p>{title}</p>
            <p>{channelTitle}</p>
            <p>{publishedAt}</p>
        </li>
    );
}

