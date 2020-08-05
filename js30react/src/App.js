import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';

import Home from './Projects/Home.jsx'
import NavBar from './Projects/NavBar.jsx'
import DrumMachine from './Projects/DrumMachine/DrumMachine.jsx'

class App extends Component {
  

  render(){
    return (
      <div className="App">
        <div className='header'>
          <NavBar />
        </div>
        <div className='App-body'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/drum_machine' component= {DrumMachine} />
          </Switch>
        </div>
      </div>
    );
  }
  
}

export default App;
