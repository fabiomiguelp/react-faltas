import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Tabela from '../common/Tabela';
import Header from '../common/Header';

function Home() {
  return (
    <div className="App">
      <Header></Header>
    <Tabela></Tabela>
  </div>

  );
}

export default Home;
