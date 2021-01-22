import './MovieDetails.css';

export default function MovieGallery(props) {
    let {movie} = props
    let hours = movie.length / 60
    let minutes = movie.length % 60
    let genres = movie.genres.map( e=> {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })

    let considerButton = props.consideredMovies.includes(movie) ? <button className="unconsider-movie-button" onClick={() => props.removeConsideredMovie(movie)}>Unconsider Movie</button> : <button className="consider-movie-button" onClick={() => props.considerMovie(movie)}>Consider Movie</button>

    return (
        <div className="movie-details-div">
            <div className="left-div">
                <button className="movie-details-button-left" onClick={() => props.toggleView("movieForm", movie)}>Edit Movie</button>
                <button className="movie-details-button-left" onClick={() => props.deleteMovie(movie)}>Delete Movie</button>
                <p className="year-p">Year: {movie.year}</p>
                <p>Genres: {genres.join(',  \xa0')}</p>
                <p>Length: {Math.floor(hours)} Hr {minutes} Min</p>
                <p>Rating: {movie.stars}</p>
                <p>Age Rating: {movie.ageRating}</p>
            </div>
            <div className="center-div">
                <h1 className="title">{movie.title}</h1>
                <p className="summary">{movie.summary}</p>
                <p className="owned-formats">Owned Formats: {movie.formats.join(", ")}</p>
            </div>
            <div className="right-div">
                <div className="right-buttons-div">
                    {considerButton}
                    <button className="movie-details-button-right" onClick={() => props.toggleView("movieGallery")}>X</button>
                </div>
                <img className="detail-movie-poster" src={movie.posterPath} alt={movie.title}/>
            </div>
        </div>
    )
}