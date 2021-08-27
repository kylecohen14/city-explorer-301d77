import React from 'react';
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
  render(){
    console.log(this.props.getMovies);
    return(
      <div>
        {this.props.getMovies.map((value, idx) => (
        <Card key={idx} bg='danger' border="primary" style={{width: '16rem'}}>
          <Card.Text>Title: {value.title}, Overview: {value.overView}, Avg Votes: {value.averageVotes}, Total Votes: {value.totalVotes}</Card.Text>
          <img src={value.poster} alt='poster' />
          <Card.Text>Popularity: {value.popularity}, Date released on: {value.date}</Card.Text>
        </Card>
        )
        )}
      </div>
    )
  }
}
export default Movies;
