import React, {Component} from 'react'
import './FilterSection.css';

class FilterSection extends Component {
  constructor(props) {
    super(props)
    this.state = {
        title: "",
        genres: "",
        rating: ""
    }
  }

  resetFilters(cb) {
    this.setState({
      title: "",
      genres: "",
      rating: ""
    })
    if (cb) cb()
  }

  render() {
    return (
        <div class="filter-section-div">
          <h3>Filters:</h3>
            <div class="filter-fields">
                <input className="filter-input-field" value={this.state.title} placeholder="Search by title..." onChange={(e) => this.setState({title: e.target.value})}></input>
                <input className="filter-input-field" value={this.state.genres} placeholder="Search by genre..." onChange={(e) => this.setState({genres: e.target.value})}></input>
                <input className="filter-input-field" value={this.state.rating} placeholder="Search by rating..." onChange={(e) => this.setState({rating: e.target.value})}></input>
                <button className="filter-button" onClick={() => {
                  this.props.filterMovies({...this.state})
                  this.props.resetCurrentIndex()
                }}>search</button>
                <button className="filter-button" onClick={() => this.resetFilters(this.props.clearFilters)}>clear search</button>
                
            </div>
            <div>
                <button className="filter-button add-movie-button" onClick={() => this.props.addNewMovie("movieForm")}>+ Add Movie</button>
            </div>
        </div>
    ) 
  }
}

export default FilterSection;
