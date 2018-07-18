import React, { Component } from "react";

class Location extends Component {

  render() {
    return (
      <li
        // aria specification
        role='button'
        tabIndex='0'

        className="location"
        onKeyPress={this.props.showinfowindow.bind(
          this,
          this.props.location.marker
        )}
        onClick={this.props.showinfowindow.bind(this, this.props.location.marker)}
      >
        {this.props.location.title}
      </li>
    );
  }
}

export default Location;