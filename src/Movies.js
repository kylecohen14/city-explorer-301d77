import React from 'react';
import SingleDayMovies from './components/singleDayMovies.js';

class Movies extends React.Component {
  render(){
    console.log(this.props.getMovies);
    return(
      <div>
        {this.props.getMovies.map((value, idx) => (
        <SingleDayMovies key={idx} value={value} />
        )
        )}
      </div>
    )
  }
}
export default Movies;
