import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Markers from './Markers';

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 52.520645, lng: 13.409779},
    zoom: 11
  }

  showDetails() = {

  }

  render() {
    return (
      <div
        style={{ height: '100%', width:'100%', position: 'absolute' }}
        className='google-map'
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyADx7MTThdOIoeAzBqNRIM8MdPJqOkP87Y' }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <Markers
            lat={52.547450}
            lng={13.414179}
            text={'Chay Umi'}
          />
          <Markers
            lat={52.439586}
            lng={13.214402}
            text={'Goodies'}
          />
          <Markers
            lat={52.501156}
            lng={13.343829}
            text={'Dolores'}
          />
          <Markers
            lat={52.457234}
            lng={13.320434}
            text={'Peter Pane'}
          />
         <Markers
            lat={52.508920}
            lng={13.322033}
            text={'Satyam'}
          />
          <Markers
            lat={52.489857}
            lng={13.348840}
            text={'Chay Village'}
          />
        </GoogleMapReact>
      </div>
    )
  }
}
