import React from 'react';
import { useLocation } from 'react-router-dom';

export default function VideoDetail() {
    const {state:{video}} = useLocation();
    const {title} = video.snippet;
    return (
        <div>
            VideoDetail🔍 {title}
        </div>
    );
}

