import React from 'react';
import Head from './components/head'
import Banner from './components/banner'
import Foot from './components/foot'
import All from './components/Gundong/all'
import './App.scss'
function App() {
  return (
    <div className="App">
      <Head></Head>
      <Banner></Banner>
      <All></All>
      <Foot></Foot>
    </div>
  );
}

export default App;
