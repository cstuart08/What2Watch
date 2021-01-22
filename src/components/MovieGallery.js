import MovieCard from './MovieCard'
import './MovieGallery.css';

export default function MovieGallery(props) {
    let mappedMovies = props.movies.map( e => {
        return <MovieCard key={e.id} toggleView={props.toggleView} movie={e}/>
    })
    let arrow = "⬅"
    return (
        <div class="movie-gallery-div">
            <button className="left-arrow-button" onClick={() => props.updateIndex("left")}>{arrow}</button>
            {mappedMovies}
            <button className="right-arrow-button" onClick={() => props.updateIndex("right")}>{arrow}</button>
        </div>
    )

}