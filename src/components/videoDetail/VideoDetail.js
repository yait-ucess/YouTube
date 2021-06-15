import React, { useContext } from 'react';
import { Store } from '../../store/index';
import VideoPlay from '../videoPlay/VideoPlay';
import Style from './VideoDetail.module.scss';
import Linkify from 'react-linkify';

export const VideoDetail = () => {
  const { globalState } = useContext(Store);
  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (<span>No data</span>)
}

export default VideoDetail