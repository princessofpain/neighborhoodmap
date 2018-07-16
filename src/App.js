import React, { Component } from 'react';
import Maps from './Maps.js';
import ListView from './ListView.js';

class App extends Component {
 state = {
  locations: [
    {title: 'Chay Umi', lng: 13.414179, lat: 52.547450, details: 'Vietnamese Restaurant'},
    {title: 'Goodies', lng: 13.214402, lat: 52.439586, details: 'Coffeeshop'},
    {title: 'Dolores', lng: 13.343829, lat: 52.501156, details: 'Californian-Mexican Restaurant'},
    {title: 'Peter Pane', lng: 13.320434, lat: 52.457234, details: 'Burger Restaurant'},
    {title: 'Satyam', lng: 13.322033, lat: 52.508920, details: 'Indian Restaurant'},
    {title: 'Chay Village', lng: 13.348840, lat: 52.489857, details: 'Vietnamese Restaurant'}
  ],
  };


  render() {
    return (
      <div className='App' style = {{ display:'flex', wrap:'row' }}>
        <ListView/>
        <Maps locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;

