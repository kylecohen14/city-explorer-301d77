import React from 'react';
import Card from 'react-bootstrap/Card';

class singleDayMovies extends React.Component {
  render () {
    return (
      <div>
        <Card bg='danger' border="primary" style={{width: '16rem'}}>
          <Card.Text>Title: {this.props.value.title}, Overview: {this.props.value.overView}, Avg Votes: {this.props.value.averageVotes}, Total Votes: {this.props.value.totalVotes}</Card.Text>
          <img src={this.props.value.poster} alt='poster' />
          <Card.Text>Popularity: {this.props.value.popularity}, Date released on: {this.props.value.date}</Card.Text>
        </Card>
      </div>
    )
}
}
export default singleDayMovies;