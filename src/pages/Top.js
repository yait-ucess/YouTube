import React, { useContext, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { fetchPopularData } from '../apis/index';
import { Store } from '../store/index';
import VideoGrid from '../components/videoGrid/VideoGrid';
import VideoGridItem from '../components/videoGridItem/VideoGridItem';

const Top = () => {
  const { globalState, setGlobalState } = useContext(Store);
  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res);
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.medium.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top
