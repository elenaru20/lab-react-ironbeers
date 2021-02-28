import React from 'react';
import './App.css';
import {
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';

import Beers from './components/Beers';
import SingleBeer from './components/SingleBeer';

function App() {
  return (
    <div className="App">
      <nav style={{backgroundColor:"#3cc3fc", marginBottom:"20px"}}>
        <Link to="/">
            <img style={{width:"50px", filter:"brightness(0) invert(1)"}} src="../assets/home_button.png" alt="home"/>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beers} />
        <Route
            exact
            path="/beers/:beerId"
            component={SingleBeer}
          />
      </Switch>
    </div>
  );
}

export default App;
