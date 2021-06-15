import React, { useContext } from 'react';
import { Store } from '../../store/index';
import SideListItem from '../sideListItem/SideListItem';
import Style from './SideList.module.scss';

const SideList = () => {
  const { globalState } = useContext(Store);
  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId} 
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
        }) : <span>No data</span>
      }
    </div>
  )
}

export default SideList
