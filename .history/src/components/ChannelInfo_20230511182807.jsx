import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({id, name}) {
    const { youtube } = useYoutubeApi();
    const { data:url } = useQuery(['channel',id],() => youtube.channelImgURL(id))
    return (
        <div>
            {url && <img src={url} alt={name}/>}
            <p>{name}</p>
        </div>
    );
}

