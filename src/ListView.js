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
    this.props.closeinfoWindow;

    const { value } = e.target;
    let locationsArray = [];

    this.props.locationsNew.forEach(function(location){
      if(location.title.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        location.marker.setVisible(true);
        locationsArray.push(location);
      } else {
        location.marker.setVisible(false);
      }
    });
    this.setState({
      locations: locationsArray,
      query: value
    });
  }

  render() {
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
      <div className='list-view' style={{ height: '100%', width:'100%' }}>
        <input
          className= 'search'
          type= 'text'
          value={this.state.query}
          onChange={this.filterLocations}
        />
        <ul className='venue-list'>
          {listView}
        </ul>
      </div>
    )
  }
}

export default ListView;