import React, {Component} from 'react'
import './MovieForm.css';

class MovieForm extends Component {
  constructor(props) {
    super(props)

    if (props.isEditing) {
        const {id, title, year, genres, length, posterPath, summary, stars, ageRating, formats} = props.movie
        this.state = {
            id,
            title,
            year,
            genres,
            length,
            posterPath,
            summary,
            stars,
            ageRating,
            formats
        }
    } else {
        this.state = {
            title: "",
            year: 0,
            genres: [],
            length: 0,
            posterPath: "",
            summary: "",
            stars: 0,
            ageRating: "",
            formats: []
        }
    }
  }

  updateStringValue(e) {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  updateIntValue(e) {
    this.setState({
        [e.target.name]: +e.target.value
    })
  }

  updateArrayValue(e) {
    let spacelessString = e.target.value.split(" ").join("")
    let array = spacelessString.split(',')
    this.setState({
        [e.target.name]: array
    })
  }


  render() {
      let movie = this.state
      let movieFormDiv = this.props.isEditing ? (
        <div class="movie-form-main-div">
          <div className="movie-form-buttons-div">
            <button onClick={() => this.props.editMovie(movie)}>UPDATE MOVIE</button>
            <button onClick={() => this.props.toggleView("movieGallery")}>X</button>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Title:</p>
            <input value={this.state.title} name="title" placeholder="Enter movie title..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Release Year:</p>
            <input value={this.state.year} name="year" placeholder="Enter movie year..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Genres:</p>
            <input value={this.state.genres} name="genres" placeholder="Enter movie genres with comma..." onChange={(e) => this.updateArrayValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Length:</p>
            <input value={this.state.length} name="length" placeholder="Enter movie length (total minutes)..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Poster URL:</p>
            <input value={this.state.posterPath} name="posterPath" placeholder="Enter movie poster URL..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Summary:</p>
            <input value={this.state.summary} name="summary" placeholder="Enter movie summary..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Rating:</p>
            <input value={this.state.stars} name="stars" placeholder="Enter movie stars..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Age-Rating:</p>
            <input value={this.state.ageRating} name="ageRating" placeholder="Enter movie age rating..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Owned Formats:</p>
            <input value={this.state.formats} name="formats" placeholder="Enter movie formats with comma..." onChange={(e) => this.updateArrayValue(e)}/>
          </div>
      </div>
      ) : (
        <div className="movie-form-main-div">
          <div className="movie-form-buttons-div">
            <button onClick={() => this.props.addMovie(this.state)}>SAVE MOVIE</button>
            <button onClick={() => this.props.toggleView("movieGallery")}>X</button>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Title:</p>
            <input name="title" placeholder="Enter movie title..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Release Year:</p>
            <input name="year" placeholder="Enter movie year..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Genres:</p>
            <input name="genres" placeholder="Enter movie genres with comma..." onChange={(e) => this.updateArrayValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Length:</p>
            <input name="length" placeholder="Enter movie length (total minutes)..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Poster URL:</p>
            <input name="posterPath" placeholder="Enter movie poster URL..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Summary:</p>
            <input name="summary" placeholder="Enter movie summary..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Rating:</p>
            <input name="stars" placeholder="Enter movie stars..." onChange={(e) => this.updateIntValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Movie Age-Rating:</p>
            <input name="ageRating" placeholder="Enter movie age rating..." onChange={(e) => this.updateStringValue(e)}/>
          </div>
          <div className="movie-form-sub-div">
            <p>Owned Formats:</p>
            <input name="formats" placeholder="Enter movie formats with comma..." onChange={(e) => this.updateArrayValue(e)}/>
          </div>
      </div>
      )

    return (
        <div>{movieFormDiv}</div>
    )
  }
}

export default MovieForm;