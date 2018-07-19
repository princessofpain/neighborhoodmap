import React, { Component } from 'react';
import Maps from './Maps.js';

class App extends Component {
  state = {
    locations: [
      {title: 'Chay Umi', lng: 13.414179, lat: 52.547450},
      {title: 'RYONG', lng: 13.408988, lat: 52.529074},
      {title: 'goodies', lng: 13.214402, lat: 52.439586},
      {title: 'dolores*', lng: 13.343829, lat: 52.501156},
      {title: 'Peter Pane', lng: 13.320434, lat: 52.457234},
      {title: 'Satyam', lng: 13.322033, lat: 52.508920},
      {title: 'Chay Village', lng: 13.348840, lat: 52.489857}
    ],
  };

  render() {
    return (
      <div className='App'>
        <Maps locations={this.state.locations}/>
      </div>
    );
  }
}

export default App;

