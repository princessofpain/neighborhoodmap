import React, { Component } from 'react';
import Location from './Location.js'

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: ''
    }
  }

  componentWillMount() {
    this.setState({
      locations: this.props.locationMarkers
    })
  }

  render() {
    const listView = this.props.locations.map((location, index) => {
      return(
        <Location
          key={index}
          showinfowindow={this.props.showinfowindow.bind(this)}
          data={location}
        />
      )
    }, this);

    return (
      <div className='list-view' style={{ height: '100%', width:'100%' }}>
        <ul className='venue-list'>
          {listView}
        </ul>
      </div>
    )
  }
}

export default ListView;