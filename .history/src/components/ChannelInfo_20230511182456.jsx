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
            <img scr='https://yt3.ggpht.com/ytc/AGIKgqMvz1FLZCmwKVuLKzoStseNVCoJTWDz1syhD-nWQ74=s88-c-k-c0x00ffffff-no-rj' alt={name}></img>
            <p>{name}</p>
        </div>
    );
}

