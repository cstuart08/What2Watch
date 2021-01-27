import React, {Component} from 'react'
import axios from 'axios'
import MovieGallery from './MovieGallery'
import ConsideredMoviesGallery from './ConsideredMoviesGallery'
import FilterSection from './FilterSection'
import MovieDetails from './MovieDetails'
import MovieForm from './MovieFrom'
import './Movies.css';

class Movies extends Component {
  constructor() {
    super()
    this.state = {
        movies: [],
        consideredMovies: [],
        currentIndex: 0,
        movieToDisplay: {},
        isEditing: false,
        movieGalleryView: true,
        movieDetailView: false,
        movieFormView: false
    }

    this.toggleViews = this.toggleViews.bind(this)
    this.updateIndex = this.updateIndex.bind(this)
    this.resetCurrentIndex = this.resetCurrentIndex.bind(this)
    this.addToConsideredMovies = this.addToConsideredMovies.bind(this)
    this.addMovie = this.addMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.removeFromConsideredMovies = this.removeFromConsideredMovies.bind(this)
    this.editMovie = this.editMovie.bind(this)
    this.getFilteredMovies = this.getFilteredMovies.bind(this)
    this.clearAllFilters = this.clearAllFilters.bind(this)
  }

  componentDidMount() {
      this.getMovies()
      this.getConsideredMovies()
  }

  getMovies() {
    axios.get('/api/movies').then(res => {
        this.setState({
            movies: res.data,
        })
        this.toggleViews("movieGallery")
    }).catch( error => {
        console.log(`There was an error getting your movies. Error: ${error}`)
    })
  }

  getConsideredMovies() {
      axios.get('/api/considered').then(res => {
          this.setState({
              consideredMovies: res.data
          })
      }).catch( error => {
          console.log(`There was an error getting your considered movies. Error ${error}`)
      })
  }

  getFilteredMovies(queries) {
      let queryString = "?"
      for (const key in queries) {
          if (queries[key]) {
            queryString += "&" + key + "=" + queries[key]
          }
      }
      console.log(queryString)
      axios.get(`/api/movies${queryString}`).then(res => {
          this.setState({
              movies: res.data
          })
          this.toggleViews("movieGallery")
      }).catch( error => {
        console.log(`There was an error getting filtered movies. Error: ${error}`)
    })
  }

  clearAllFilters() {
      this.getMovies()
  }

  addMovie(movie) {
      axios.post('/api/movies', movie).then(res => {
          this.setState({
              movies: res.data
          })
          this.toggleViews("movieGallery")
      }).catch( error => {
        console.log(`There was an error posting a movie. Error: ${error}`)
    })
  }

  deleteMovie(movie) {
    axios.delete(`/api/movies/${movie.id}`).then(res => {
        if (res.status === 200) {
            let indexOfConsideredMovie = this.state.consideredMovies.findIndex(e => e.id === movie.id)
            let updatedMovies = [...this.state.consideredMovies]
            updatedMovies.splice(indexOfConsideredMovie, 1)
            this.setState({
                movies: res.data,
                consideredMovies: updatedMovies
            })
            this.toggleViews("movieGallery")
        }
    }).catch( error => {
        console.log(`There was an error deleting a movie. Error: ${error}`)
    })
  }

    editMovie(movie) {
        axios.put(`/api/movies/${movie.id}`, movie).then(res => {
            console.log(res.data)
            this.setState({
                movies: res.data
            }, () => {
                this.toggleViews("movieGallery")
                this.updateConsideredMovies(this.state.consideredMovies)
            })
        }).catch( error => {
            console.log(`There was an error editing a movie. Error: ${error}`)
        })
    }

  updateIndex(direction) {
      if (direction === "right") {
          if (this.state.currentIndex >= this.state.movies.length - 5) {
            return
          } else {
            this.setState({
                currentIndex: this.state.currentIndex + 1
            })
          }
      } else {
        if (this.state.currentIndex === 0) {
            return
          } else {
            this.setState({
                currentIndex: this.state.currentIndex - 1
            })
          }
      }
  }

  resetCurrentIndex() {
      this.setState({
          currentIndex: 0
      })
  }

  addToConsideredMovies(movie) {
    axios.post('/api/considered', movie).then(res => {
        console.log(res.data)
        this.getConsideredMovies()
        this.toggleViews("movieGallery")
    }).catch( error => {
      console.log(`There was an error posting a movie. Error: ${error}`)
    })
  }

  removeFromConsideredMovies(movie) {
    axios.delete(`/api/considered/${movie.id}`).then(res => {
        if (res.status === 200) {
            this.getConsideredMovies()
        } else {
            console.log(`There was a server error unconsidering a movie. Status: ${res.status}`)
        }
    }).catch( error => {
        console.log(`There was an error unconsidering a movie. ${error}`)
    })
      this.toggleViews("movieGallery")
  }

  updateConsideredMovies() {
      let consideredMovies = [...this.state.consideredMovies]
      for (let i = 0; i < consideredMovies.length; i++) {
        let index = this.state.movies.findIndex(e => e.id === consideredMovies[i].id)
        if (index === -1) {
            return
        }
        consideredMovies[i] = this.state.movies[index]
      }
      this.setState({
          consideredMovies: consideredMovies
      })
  }

  toggleViews(view, movie) {
      console.log("hitting this spot")
    if (view === "movieGallery") {
        this.setState({
            isEditing: false,
            movieGalleryView: true,
            movieDetailView: false,
            movieFormView: false
        })
    } else if (view === "movieForm") {
        if (movie) {
            this.setState({
                movieToDisplay: movie,
                isEditing: true,
                movieGalleryView: false,
                movieDetailView: false,
                movieFormView: true
            })
        } else {
            this.setState({
                isEditing: false,
                movieGalleryView: false,
                movieDetailView: false,
                movieFormView: true
            })
        }
    } else if (view === "movieDetails") {
        this.setState({
            movieToDisplay: movie,
            isEditing: false,
            movieGalleryView: false,
            movieDetailView: true,
            movieFormView: false
        })
    }
  }

  render() {
      let mainSection = null 
      if (this.state.movieGalleryView) {
        mainSection = <MovieGallery updateIndex={this.updateIndex} toggleView={this.toggleViews} movies={this.state.movies.slice(this.state.currentIndex, this.state.currentIndex + 5)}/>
      } else if (this.state.movieDetailView) {
        mainSection = <MovieDetails removeConsideredMovie={this.removeFromConsideredMovies} consideredMovies={this.state.consideredMovies} deleteMovie={this.deleteMovie} considerMovie={this.addToConsideredMovies} toggleView={this.toggleViews} movie={this.state.movieToDisplay}/>
      } else {
          if (this.state.isEditing) {
            mainSection = <MovieForm editMovie={this.editMovie} addMovie={this.addMovie} toggleView={this.toggleViews} isEditing={true} movie={this.state.movieToDisplay}/>
          } else {
            mainSection = <MovieForm addMovie={this.addMovie} toggleView={this.toggleViews} isEditing={false}/>
          }
      }

    return (
        <div class="movies-div">
            <FilterSection resetCurrentIndex={this.resetCurrentIndex} clearFilters={this.clearAllFilters} addNewMovie={this.toggleViews} filterMovies={this.getFilteredMovies} />
            {mainSection}
            <ConsideredMoviesGallery removeConsideredMovie={this.removeFromConsideredMovies} toggleView={this.toggleViews} movies={this.state.consideredMovies}/>
        </div>
    ) 
  }
}

export default Movies;
