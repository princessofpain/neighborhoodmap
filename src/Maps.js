import React, { Component } from 'react';
import ListView from './ListView';

class Maps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      map: '',
      infoWindow: '',
      markerAnimation: '',
      locationsNew: []
    }

    this.initMap = this.initMap.bind(this);
    this.showinfowindow = this.showinfowindow.bind(this);
    this.closeInfoWindow = this.closeInfoWindow.bind(this);
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
        zoom: 11,
        mapTypeControl: false
      }
    );

    // intialize infoWindow from google api
    const googleInfoWindow = new window.google.maps.InfoWindow({});

    // set the state with the initialized map
    this.setState({
      map: map,
      infoWindow: googleInfoWindow
    });

    window.google.maps.event.addListener(googleInfoWindow, "closeclick", function() {
      scope.closeInfoWindow();
    });

    window.google.maps.event.addListener(map, "click", function() {
      scope.closeInfoWindow();
    });

    // set markers
    const locationsNew = this.state.locationsNew;
    this.props.locations.map((location) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          location.lat,
          location.lng
        ),
        map: this.state.map,
      });

      // add an event listener to each marker
      marker.addListener('click', function() {
        scope.showinfowindow(marker);
      });

      location.marker = marker;
      location.display = true;
      locationsNew.push(location);
    });
    this.setState({
      locationsNew: locationsNew
    })
  }

  // display infoWindow for a certain marker
  showinfowindow(marker) {
    this.closeInfoWindow();
    this.state.infoWindow.open(this.state.map, marker);

    marker.setAnimation(window.google.maps.Animation.BOUNCE);
    this.setState({
      markerAnimation: marker,
    });

    this.fetchLocationInfo(marker);
  }

  // fetch the info from the third party api
  fetchLocationInfo(marker) {
    const scope = this;
    const locations = this.props.locations;

    const id = 'DX5ULCFRRHBNJLOUEL4VSM3EMU2OHWMYNXRNO5WITZDRKHOS';
    const secret = 'XI5VCQ2TANMEYDJNJEF4R5WNYLCK2F1JYFZOYJJ33MNMZKF5';

    const lat = marker.getPosition().lat();
    const lng = marker.getPosition().lng();

    const request = `https://api.foursquare.com/v2/venues/search?client_id=${id}&client_secret=${secret}&ll=${lat},${lng}&v=20180717&limit=20`;

    fetch(request).then(function(response) {
      if(response.status !== 200) {
      scope.state.infowindow.setContent('Failure in loading the data. Data can´t be reached.');
      return;
    }
      response.json().then(function(data) {
        data.response.venues.forEach(function(venue) {
          locations.forEach(function(location) {
            if(location.title === venue.name) {
              location = venue;
              scope.state.infoWindow.setContent(`<h1 style='margin-top:3%; margin-bottom: 0px;'>${location.name}</h1><p style='margin-bottom:1%; margin-top:8%;'><i>${location.categories[0].name}</i></p><p style='margin-top:4%;'>${location.location.address}<br/>${location.location.postalCode} ${location.location.city}</p>`);
            }
          });
        });
      });
    })
    .catch(function(err) {
      scope.state.infoWindow.setContent('Data can´t be loaded');
    })
  }

  closeInfoWindow() {
    if(this.state.markerAnimation) {
      this.state.markerAnimation.setAnimation(null);
    }

    this.setState({
      markerAnimation: ''
    })

    this.state.infoWindow.close();
  }

  render() {
    return(
      <div className='flex-container' role='main'>
        <div className='list-container'>
          <ListView locations={this.props.locations} infoWindowState={this.state.infoWindow} markerAnimation={this.state.markerAnimation} locationsNew={this.state.locationsNew} showinfowindow={this.showinfowindow} closeInfoWindow={this.closeInfoWindow}/>
        </div>
        <div className='map'>
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