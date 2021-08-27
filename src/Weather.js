import React from 'react';
import SingleDayWeather from './components/singleDayWeather.js';

class Weather extends React.Component {
  render(){
    console.log(this.props.getWeather);
    return(
      <div>
        {this.props.getWeather.map((value, idx) => (
          <SingleDayWeather key={idx} value={value} />
        )
        )}
      </div>
    )
  }
}
export default Weather;
