import MovieCard from './MovieCard'
import './ConsideredMoviesGallery.css';

export default function ConsideredMoviesGallery(props) {
    let mappedMovies = props.movies.map( e => {
        return <MovieCard key={e.id+"C"} removeConsideredMovie={props.removeConsideredMovie} toggleView={props.toggleView} movie={e} considered={true} />
    })
    return (
        <div class="considered-gallery-div">
            <h3>Considered Movies:</h3>
            <div className="vertical-line"></div>
            <div className="considered-movie-cards">
                {mappedMovies}
            </div>
        </div>
    )
}