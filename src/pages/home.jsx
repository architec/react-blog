import React from 'react';

import { DashboardLayout } from '../components/Layout';
import AnimeText from '../components/AnimeText';
import NeonJobs from '../components/AnimeLogo';

const HomePage = () => {
  return (
    <DashboardLayout>
      {/* <div style={{textAlign: "center"}}>
      <div style={{
        border: "3px solid green",
        padding: "10px",
        alignContent: "center",
        display: "inline-block"
      }}>
        <AnimeText text="Welcome to my world" />
      </div>
      </div> */}
      <div style={{
        alignItems: "center",
        justifyContent: "center",
      }}>
      <NeonJobs/></div>
    </DashboardLayout>
  )
}

export default HomePage;