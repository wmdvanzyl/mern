/* eslint-disable indent */
import React, {useEffect} from 'react';
import './Home.scss';
import agent from '../../agent/agent';
import MainForm from '../MainForm/MainForm';
//import MainForm from '../MainForm/MainForm';

const Home = () => {

  //React.useEffect(() => {
  useEffect(() => {
    agent.Crawler.getHistory();//TODO: remove semicolon when uncommenting code below
      /*.then(res => {
        // Do something on successful getHisory() call

      }).catch(e => {
        // Handle the error if unsuccessful getHisory() call

      });*/
  });

  return (
    <div className='main'>
      <h1>Mini Crawler</h1>
        <MainForm></MainForm>
    </div>
  );
};

export default Home;
