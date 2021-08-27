import React from 'react';
import Card from 'react-bootstrap/Card';

class LocationInfo extends React.Component {
  render() {
    return (
      <>
      <Card.Title>City Name: {this.props.location.display_name}</Card.Title>
        <Card.Text>Latitude: {this.props.location.lat}</Card.Text>
        <Card.Text>Longitude: {this.props.location.lon}</Card.Text>
      <Card.Img src ={this.props.map} alt='map of city' />
      </>
      )
  }
}
export default LocationInfo;