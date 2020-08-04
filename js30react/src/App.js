import React from 'react';
import {Switch, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

class extends App {
  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <div className='App-header'>
        </div>
        <div className='App-body'>
          <Switch>
            <Route />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default App;
