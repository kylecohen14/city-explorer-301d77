import React from 'react';
import Card from 'react-bootstrap/Card';

class singleDayWeather extends React.Component {
  render () {
    return (
      <div className='daily-forecast'>
        <Card bg='danger' border="primary" style={{width: '16rem'}}>
          <Card.Text>Weather forecast: low of {this.props.value.low_temp} degrees, high of {this.props.value.max_temp} degrees, with {this.props.value.description}, Date: {this.props.value.date}</Card.Text>
        </Card>
      </div>
    )
}
}
export default singleDayWeather;