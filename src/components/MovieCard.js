import React, {Component} from 'react'
import './MovieCard.css';

class Movies extends Component {
  constructor(props) {
    super(props)
    this.state = {
        movie: props.movie,
        isConsideredGallery: props.considered || false
    }
  }

  render() {
    let imageToDisplay = this.state.isConsideredGallery ? <img src={this.props.movie.posterPath} alt="movie poster" class="considered-gallery-card" onClick={() => this.props.toggleView("movieDetails", this.props.movie)}/> : <img src={this.props.movie.posterPath} alt="movie poster" class="movie-gallery-card" onClick={() => this.props.toggleView("movieDetails", this.props.movie)}/>

    return (
        <div className="container">
            {imageToDisplay}
            {this.state.isConsideredGallery ? (<button className="considered-card-button" onClick={() => this.props.removeConsideredMovie(this.state.movie)} >X</button>) : (null)}
        </div>
    ) 
  }
}

export default Movies;