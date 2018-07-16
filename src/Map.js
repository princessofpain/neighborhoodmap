import React, { Component } from 'react';

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 52.520645, lng: 13.409779},
    zoom: 11,
    locations: this.locations,
    map: this.map,
    infoWindow: this.infoWindow
  }

  render() {
    return(
      <div className='map' style={{ height: '100%', width: '100%', backgroundColor: 'green'}}>
        <p>Map</p>
      </div>
    )
  }

}
