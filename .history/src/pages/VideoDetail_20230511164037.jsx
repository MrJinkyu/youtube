import React from 'react';
import { useLocate } from 'react-router-dom';

export default function VideoDetail() {
    const {state:{video}} = useLocate();
    const {title} = video.snippet;
    return (
        <div>
            VideoDetail🔍 {title}
        </div>
    );
}

