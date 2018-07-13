import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Markers from './Markers';

export default class Map extends Component {
  static defaultProps = {
    center: { lat: 52.520645, lng: 13.409779},
    zoom: 11,
    locations: [
      {title: 'Chay Umi', lng: 13.414179, lat: 52.547450, details: 'abc'},
      {title: 'Goodies', lng: 13.214402, lat: 52.439586, details: 'abc'},
      {title: 'Dolores', lng: 13.343829, lat: 52.501156, details: 'abc'},
      {title: 'Peter Pane', lng: 13.320434, lat: 52.457234, details: 'abc'},
      {title: 'Satyam', lng: 13.322033, lat: 52.508920, details: 'abc'},
      {title: 'Chay Village', lng: 13.348840, lat: 52.489857, details: 'abc'}
    ]
  }

  // setMarkers = () => {
  //   this.props.locations.forEach((location) => {
  //     <Markers title={location.title} lat={location.lat} lng={location.lng}/>
  //   });
  // }

  showDetails() {

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
          defaultZoom={ this.props.zoom }
        >
        {this.props.locations.map((location) => {
          return(
            <Markers
              title = {location.title}
              lng = {location.lng}
              lat = {location.lat}
              details = {location.details}
            />
          )
        })}

{/*          <Markers
             lat={52.547450}
             lng={13.414179}
             text={'Chay Umi'}
             info={this.showDetails()}
           />
           <Markers
             lat={52.439586}
             lng={13.214402}
             text={'Goodies'}
             info={this.showDetails()}
           />
           <Markers
             lat={52.501156}
             lng={13.343829}
             text={'Dolores'}
             info={this.showDetails()}
           />
           <Markers
             lat={52.457234}
             lng={13.320434}
             text={'Peter Pane'}
             info={this.showDetails()}
           />
          <Markers
             lat={52.508920}
             lng={13.322033}
             text={'Satyam'}
             info={this.showDetails()}
           />
           <Markers
             lat={52.489857}
             lng={13.348840}
             text={'Chay Village'}
             info={this.showDetails()}
            />*/}
        </GoogleMapReact>
      </div>
    )
  }
}
