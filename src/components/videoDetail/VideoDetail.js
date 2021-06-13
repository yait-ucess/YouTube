import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchSelectedData } from '../../apis/index';
import { Store } from '../../store/index';

export const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store);
  const location = useLocation();
  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('');
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift();
      setGlobalState({ type: 'SET_SELECTED', payload: {selected: item} });
    })
  }
  useEffect(() => {
    setSelectedVideo();
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default VideoDetail