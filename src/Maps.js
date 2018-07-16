import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: '',
    }

    this.initMap = this.initMap.bind(this);
  }

  static propTypes = {
    locations: PropTypes.array.isRequired,
  }

  componentDidMount() {
    window.initMap = this.initMap;

    loadMap('https://maps.googleapis.com/maps/api/js?key=AIzaSyDxWjgFKG3lrMXAPUcTy4d8c3AhovpScv8&callback=initMap');
  }

  initMap() {
    // initialize the map in the map div
    const mapContainer = document.querySelector('.map');
    const map = new window.google.maps.Map(
      mapContainer, {
        center: { lat: 52.520645, lng: 13.409779},
        zoom: 11
      }
    );

    this.setState({
      map: map
    })

    // set the markers
    this.props.locations.map((location, key) => {
      console.log(location);
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          location.lat,
          location.lng
        ),
        map: map
      });
    });
  }

  render() {
    return(
      <div className='map' style={{ height: '100%', width: '70%', position:'absolute', marginLeft:'30%' }}>
      </div>
    )
  }
}

export default Maps;

function loadMap(request) {
  const body = window.document.querySelector('body');
  const script = window.document.createElement('script');
  script.src = request;
  script.async = true;
  script.onerror = function() {
    document.write('Error in loading Google Maps. Please try again later.')
  }
  body.prepend(script);
}
