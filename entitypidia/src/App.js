import Home from './Home.js'
import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link, Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <HashRouter>
       <div>
        <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/home" component={Home}/> 
        </Switch>
      </div>
    </HashRouter>
    )
}
}
  
export default App;