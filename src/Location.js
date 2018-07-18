import React, { Component } from "react";

class Location extends Component {

  render() {
    return (
      <li
        className="location"
        onKeyPress={this.props.showinfowindow.bind(
          this,
          this.props.data.marker
        )}
        onClick={this.props.showinfowindow.bind(this, this.props.data.marker)}
      >
        {this.props.data.title}
      </li>
    );
  }
}

export default Location;