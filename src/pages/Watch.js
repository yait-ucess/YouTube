import React from 'react';
import Layout from '../components/layout/Layout';
import VideoDetail from '../components/videoDetail/VideoDetail';
import SideList from '../components/sideList/SideList';

const Watch = () => {
  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch