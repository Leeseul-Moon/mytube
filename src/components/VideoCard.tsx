import React from 'react';
import { Video } from '../models/Video';
import { formatAgo } from '../util/data';

interface Props {
  video: Video;
}

function VideoCard({ video }: Props) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  return (
    <li>
      <img src={thumbnails.medium.url} alt={title} />
      <div>
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{formatAgo(publishedAt, 'ko')}</p>
      </div>
    </li>
  );
}

export default VideoCard;
