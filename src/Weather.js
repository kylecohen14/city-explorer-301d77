import React from 'react';
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
  render(){
    console.log(this.props.getWeather);
    return(
      <div>
        {this.props.getWeather.map((value, idx) => (
        <Card key={idx} bg='danger' border="primary" style={{width: '16rem'}}>
          <Card.Text>Weather forecast: low of {value.low_temp} degrees, high of {value.max_temp} degrees, with {value.description}, Date: {value.date}</Card.Text>
        </Card>
        )
        )}
      </div>
    )
  }
}
export default Weather;
