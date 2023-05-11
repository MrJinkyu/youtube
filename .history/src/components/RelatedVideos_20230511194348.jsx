import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './ChannelInfo.module.css';

export default function RelatedVideos({id}) {
    const { youtube } = useYoutubeApi();
    const { data:url } = useQuery(['channel',id],() => youtube.channelImgURL(id))
    return (
        <div>
            {id}
        </div>
    );
}

