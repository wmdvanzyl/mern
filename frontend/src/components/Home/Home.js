import React, {useEffect} from 'react';
import './Home.scss';
import agent from "../../agent/agent";

const Home = () => {

  React.useEffect(() => {
    agent.Crawler.getHistory()
      .then(res => {

      }).catch(e => {

    });
  })

  return (
    <div className='main'>
      <h1>Start Here</h1>
    </div>
  );
};

export default Home;
