import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({id, name}) {
    const { youtube } = useYoutubeApi();
    const { data:url } = useQuery(['channel',id],() => {
        return youtube.channelImgURL(id)
})

    return (
        <div>
            {url && <img scr={url} alt={name}></img>}
            <p>{name}</p>
        </div>
    );
}

