import React from 'react';
import { useLocation } from 'react-router';

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  console.log('video :>> ', video);
  return <div>VideoDetail</div>;
}
