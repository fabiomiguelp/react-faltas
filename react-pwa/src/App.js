import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './common/Tabela';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';
import MarcarPresenca from './pages/MarcarPresenca';

function App() {
  return (

    <Router>
      <Switch>
        
        <Route exact path='/'>
         <Home/>
        </Route>


        <Route path="/marcarpresenca">
            <MarcarPresenca/>
        </Route>

      

        

      </Switch>
    </Router>

  );
}

export default App;
