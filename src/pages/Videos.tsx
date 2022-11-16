import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { Video } from '../models/Video';

export default function Videos() {
  const { keyword = '' } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(['vidoes', keyword], () => youtube.search(keyword));

  return (
    <>
      Videos {keyword ? `🔍${keyword}` : '햇'}
      {isLoading && <p>Loading...</p>}
      {error && <p>error...</p>}
      {videos && (
        <ul>
          {videos.map((video: Video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
