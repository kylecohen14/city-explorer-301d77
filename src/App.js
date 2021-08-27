import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import './App.css';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Weather from './Weather.js';
import Movies from './Movies.js';
import LocationInfo from './components/LocationInfo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      cityLocation: {},
      map: '',
      errors: '',
      showError: false,
      forecastArr: [],
      moviesArr: []
    }
    this.closeError=this.closeError.bind(this);
  }
  

  getLocation = async () => {
    try{
    const LocationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.state.searchQuery}&format=json`;
    const res = await axios.get(LocationAPI);
    this.setState({ cityLocation: res.data[0] });

    this.Weather();
    this.Movies();

    const MAP = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${this.state.cityLocation.lat},${this.state.cityLocation.lon}&zoom=14`;
    const mapRes = await axios.get(MAP);
    this.setState({map: mapRes.config.url})
    }
    catch(error){
      console.log(error);
    this.setState({errors: error.message, showError: true})
    }
  }
  Weather = async () => {
    // const getWeather = `http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.cityLocation.lat}&lon=${this.state.cityLocation.lon}`;
    const getWeather = `https://cityexplorer-301d77.herokuapp.com/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.cityLocation.lat}&lon=${this.state.cityLocation.lon}`;

    
      try {
      const weatherRes = await axios.get(getWeather)
      this.setState({forecastArr: weatherRes.data})
      }catch (error) {
        this.setState({ errors: error.message, showError: true })
      }
  }

  Movies = async () => {
    // const getMovies = `http://localhost:3001/movies?searchQuery=${this.state.searchQuery}`;
    // console.log(getMovies);
    const getMovies = `https://cityexplorer-301d77.herokuapp.com/movies?searchQuery=${this.state.searchQuery}`;

      try {
      const moviesRes = await axios.get(getMovies)
      console.log(getMovies)
      this.setState({moviesArr: moviesRes.data})
      console.log(this.state.moviesArr);
      }catch (error) {
        this.setState({ errors: error.message, showError: true })
      }
  }


closeError = () => {
  this.setState({showError: false});
}



  render() {
    // console.log(state);
    return (
      <div>
        <Alert show={this.state.showError} variant='warning'>
        <Alert.Heading>Error Error</Alert.Heading>
        Error {this.state.errors}: ERROR
        <Button variant="warning" onClick={this.closeError}>Close</Button>
        </Alert>
        <Card bg='info' border="primary" style={{ width: '18rem'}}>
          <Card.Body>
            <input onChange={(e) => this.setState({ searchQuery: e.target.value })} value={this.state.searchQuery} placeholder="search a city"></input>
            <button onClick={this.getLocation}>Explore</button>
            {this.state.cityLocation.place_id &&
            <>
              <LocationInfo location={this.state.cityLocation} lat={this.state.lat} lon={this.state.lon} map={this.state.map} />

              {this.state.forecastArr.length>0 &&
              <Weather getWeather={this.state.forecastArr} searchQuery={this.state.searchQuery} />}

               {this.state.moviesArr.length>0 &&
              <Movies getMovies={this.state.moviesArr} searchQuery={this.state.searchQuery}/>}
            </>
              }
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
