import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListView from './ListView.js';

class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: '',
      infoWindow: ''
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
    const scope = this;
    // initialize the map in the map div
    const mapContainer = document.querySelector('.map');
    const map = new window.google.maps.Map(
      mapContainer, {
        center: { lat: 52.520645, lng: 13.409779},
        zoom: 11
      }
    );

    // intialize infoWindow from google api
    const googleInfoWindow = new window.google.maps.InfoWindow({});

    // set the state with the initialized map
    this.setState({
      map: map,
      infoWindow: googleInfoWindow
    });

    // set the markers
    this.props.locations.map((location, key) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          location.lat,
          location.lng
        ),
        map: map
      });

      // add an event listener to each marker
      marker.addListener('click', function() {
        scope.showinfowindow(marker, location);
        scope.fetchLocationInfo(marker, location);
      });

      const details = location.details;
      location.marker = marker;
    });
  }


  // display infoWindow for a certain marker
  showinfowindow(marker, location) {
    this.state.infoWindow.open(this.state.map, marker);
    this.state.infoWindow.setContent(location.title + '<br />' + location.details)
  }

  fetchLocationInfo(marker, location) {
    const scope = this;

    const id = 'DX5ULCFRRHBNJLOUEL4VSM3EMU2OHWMYNXRNO5WITZDRKHOS';
    const secret = 'XI5VCQ2TANMEYDJNJEF4R5WNYLCK2F1JYFZOYJJ33MNMZKF5';

    const lat = location.lat.toFixed(2);
    const lng = location.lng.toFixed(2);
    console.log(lat + ', ' + lng);
    const request = `https://api.foursquare.com/v2/venues/search?client_id=${id}&client_secret=${secret}&ll=${lat},${lng}&v=20180717&limit=1&query=${location.title}`;

    fetch(request).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    })
    .catch(function(err) {
      console.log('error');
    })
  }


  render() {
    return(
      <div style = {{ display:'flex', wrap:'row' }}>
        <ListView/>
        <div className='map' style={{ height: '100%', width: '70%', position :'absolute', marginLeft:'30%' }}>
        </div>
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