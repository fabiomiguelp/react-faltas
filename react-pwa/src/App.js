import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabela from './common/Tabela';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import MarcarPresenca from './pages/MarcarPresenca';

function App() {
  return (

    <Router>
      <Switch>
        
        <Route exact path='/'>
         <Home/>
        </Route>


        <Route path="/a3">
            <MarcarPresenca pisoCurrent={"Piso A.3"}/>
        </Route>

        <Route path="/n1">
            <MarcarPresenca pisoCurrent={"n1"}/>
        </Route>

        <Route path="/n2">
            <MarcarPresenca pisoCurrent={"n2"}/>
        </Route>

        <Route path="/n3">
            <MarcarPresenca pisoCurrent={"n3"}/>
        </Route>

        <Route path="/s1">
            <MarcarPresenca pisoCurrent={"s1"}/>
        </Route>

        <Route path="/s2">
            <MarcarPresenca pisoCurrent={"s2"}/>
        </Route>
      

        

      </Switch>
    </Router>

  );
}

export default App;
