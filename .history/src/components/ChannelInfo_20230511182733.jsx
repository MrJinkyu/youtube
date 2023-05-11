import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({id, name}) {
    const { youtube } = useYoutubeApi();
    const { data:url } = useQuery(['channel',id],() => youtube.channelImgURL(id))
    console.log(url);
    return (
        <div>
            {url && <img scr={url} alt={name}/>}
            <p>{name}</p>
        </div>
    );
}

