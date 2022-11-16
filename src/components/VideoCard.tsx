import React from 'react';
import { Video } from '../models/Video';

interface Props {
  video: Video;
}

function VideoCard({ video }: Props) {
  return <div>{video.snippet.title}</div>;
}

export default VideoCard;
