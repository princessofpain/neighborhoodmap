import React, { Component } from 'react';
import Maps from './Maps.js';
import ListView from './ListView.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {title: 'Chay Umi', lng: 13.414179, lat: 52.547450, details: 'abc'},
        {title: 'Goodies', lng: 13.214402, lat: 52.439586, details: 'abc'},
        {title: 'Dolores', lng: 13.343829, lat: 52.501156, details: 'abc'},
        {title: 'Peter Pane', lng: 13.320434, lat: 52.457234, details: 'abc'},
        {title: 'Satyam', lng: 13.322033, lat: 52.508920, details: 'abc'},
        {title: 'Chay Village', lng: 13.348840, lat: 52.489857, details: 'abc'}
      ],
      map:'',
      infoWindow:''
    };
  }

  render() {
    return (
      <div className='App' style = {{ display:'flex', wrap:'row' }}>
        <ListView/>
        <Maps locations={this.state.locations} map={this.state.map} infoWindow={this.state.infoWindow}/>
      </div>
    );
  }
}

export default App;

