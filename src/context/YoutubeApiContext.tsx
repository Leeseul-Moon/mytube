import React, { createContext, useContext } from 'react';
import FakeYoutubeClient from '../apis/fakeYoutubeClient';
import FakeYoutube from '../apis/fakeYoutubeClient';
import Youtube from '../apis/youtube';
import YoutubeClient from '../apis/youtubeClient';

const client = new FakeYoutubeClient();
// const client = new YoutubeClient();
const youtube = new Youtube(client);

export interface YoutubeProps {
  youtube: Youtube | FakeYoutube;
}

const YoutubeApiContext = createContext<YoutubeProps>({ youtube });

interface Props {
  children: React.ReactElement;
}

export function YoutubeApiProvider({ children }: Props) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
