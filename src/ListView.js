import React, { Component } from 'react';
import Location from './Location.js'

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: '',
      query: ''
    }

    this.filterLocations = this.filterLocations.bind(this);
  }

  componentWillMount() {
    this.setState({
      locations: this.props.locations
    })
  }

  filterLocations(e) {
    // disable mall animations and close all info windows
    this.props.infoWindowState.close();
    if(this.props.markerAnimation){
      this.props.markerAnimation.setAnimation(null);
    }

    // get the query for every typed letter
    const { value } = e.target;
    let locationsArray = [];

    this.props.locationsNew.forEach(function(location){
      if(location.title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        // if ther location is part of the results show the marker and make it available for the Location component
        location.marker.setVisible(true);
        locationsArray.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });
    this.setState({
      // set the state of locations with the results of the search
      locations: locationsArray,
      query: value
    });
  }

  render() {
    // map through all locations and put a location in the list
    const listView = this.state.locations.map((location, index) => {
      return(
        <Location
          key={index}
          showinfowindow={this.props.showinfowindow.bind(this)}
          location={location}
        />
      )
    }, this);

    return (
      <div className='list-view'>
        <input
          role='search'
          className='search'
          type='text'
          value={this.state.query}
          onChange={this.filterLocations}
          placeholder={'Type location'}
        />
        <ul className='venue-list'>
          {listView}
        </ul>
      </div>
    )
  }
}

export default ListView;