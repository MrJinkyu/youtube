import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import styles from './RelatedVideos.module.css';

export default function RelatedVideos({id}) {
    const { youtube } = useYoutubeApi();
    const { isLoading, error, data: videos} = useQuery(['related',id],() => youtube.channelImgURL(id))
    return (
        <div>
            {id}
        </div>
    );
}

