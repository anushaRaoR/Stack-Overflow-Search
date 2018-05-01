import React, { Component } from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Search from './search';
import Answers from "./answer/answers";
class App extends Component {






  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path='/search' component={Search}/>
        <Route path='/answer/:questionid' component={Answers}/>
        <Redirect from='' to='/search' />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
