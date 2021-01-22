import './MovieDetails.css';

export default function MovieGallery(props) {
    let movie = props.movie
    let hours = props.movie.length / 60
    let minutes = props.movie.length % 60
    let genres = props.movie.genres.map( e=> {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })

    let considerButton = props.consideredMovies.includes(props.movie) ? <button className="unconsider-movie-button" onClick={() => props.removeConsideredMovie(movie)}>Unconsider Movie</button> : <button className="consider-movie-button" onClick={() => props.considerMovie(movie)}>Consider Movie</button>

    return (
        <div className="movie-details-div">
            <div className="left-div">
                <button className="movie-details-button-left" onClick={() => props.toggleView("movieForm", movie)}>Edit Movie</button>
                <button className="movie-details-button-left" onClick={() => props.deleteMovie(movie)}>Delete Movie</button>
                <p className="year-p">Year: {props.movie.year}</p>
                <p>Genres: {genres.join(',  \xa0')}</p>
                <p>Length: {Math.floor(hours)} Hr {minutes} Min</p>
                <p>Rating: {props.movie.stars}</p>
                <p>Age Rating: {props.movie.ageRating}</p>
            </div>
            <div className="center-div">
                <h1 className="title">{props.movie.title}</h1>
                <p className="summary">{props.movie.summary}</p>
                <p className="owned-formats">Owned Formats: {props.movie.formats.join(", ")}</p>
            </div>
            <div className="right-div">
                <div className="right-buttons-div">
                    {considerButton}
                    <button className="movie-details-button-right" onClick={() => props.toggleView("movieGallery")}>X</button>
                </div>
                <img className="detail-movie-poster" src={props.movie.posterPath} alt={props.movie.title}/>
            </div>
        </div>
    )
}