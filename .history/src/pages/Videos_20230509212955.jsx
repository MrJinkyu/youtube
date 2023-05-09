import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function Videos() {
    const { keyword } = useParams();
    const { isLoading, error, data:videos } = useQuery(['videos',id],()=>{
        return fetch(`/videos/popular.json`)
        .then((res) => res.json())
        .then((data) => data.items);
    });
    return (
        <div>
            Videos {keyword ? `🔍${keyword}` : '🔥'}
        </div>
    );
}

