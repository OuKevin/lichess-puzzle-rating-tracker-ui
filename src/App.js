import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import sortBy from 'lodash/sortBy';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  async componentDidMount (){
    const { data } = await axios.get('/ratings')

    this.setState({ data: sortBy(data,'creation_date') })
  }
  render() {
    const { data } = this.state;

    console.log(data)
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
