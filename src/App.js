import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  async componentDidMount (){
    await axios.get('/api/hello')
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
