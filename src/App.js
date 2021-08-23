import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityLocation: {},
      map: ''
    }
  }

  getLocation = async () => {
    const LocationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(LocationAPI);
    this.setState({ cityLocation: res.data[0] });

    const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.cityLocation.lat},${this.state.cityLocation.lon}&zoom=14`;
    const mapRes = await axios.get(MAP);
    this.setState({map: mapRes.config.url})
  }

  render() {
    return (
      <div>
        <Card bg='info' border="primary" style={{ width: '18rem'}}>
          <Card.Body>
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} placeholder="search a city"></input>
            <button onClick={this.getLocation}>Explore</button>
            {this.state.cityLocation.place_id &&
            <>
              <Card.Title>City Name: {this.state.cityLocation.display_name}</Card.Title>
              <Card.Text>Latitude: {this.state.cityLocation.lat}</Card.Text>
              <Card.Text>Longitude: {this.state.cityLocation.lon}</Card.Text>
              <Card.Img src ={this.state.map} alt='map of city' />
            </>
              }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
