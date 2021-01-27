import './MovieDetails.css';
import GenericButton from './GenericButton';

export default function MovieGallery(props) {
    if (props.toggleView) {
        console.log("here got")
    }
    let {movie} = props
    let hours = movie.length / 60
    let minutes = movie.length % 60
    let genres = movie.genres.map( e=> {
        return e.charAt(0).toUpperCase() + e.slice(1)
    })
    let ids = props.consideredMovies.map(e => {
        return e.id
    })

    let considerButton = ids.includes(movie.id) ? <GenericButton handleClick={() => props.removeConsideredMovie(movie)}>Unconsider Movie</GenericButton> : <GenericButton handleClick={() => props.considerMovie(movie)}>Consider Movie</GenericButton>

    return (
        <div className="movie-details-div">
            <div className="left-div">
                <GenericButton className="movie-details-button-left" handleClick={() => props.toggleView("movieForm", movie)}>Edit Movie</GenericButton>
                <GenericButton className="movie-details-button-left" handleClick={() => props.deleteMovie(movie)}>Delete Movie</GenericButton>
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
                    <GenericButton customStyle="x-button" handleClick={() => props.toggleView("movieGallery")}>X</GenericButton>
                </div>
                <img className="detail-movie-poster" src={movie.posterPath} alt={movie.title}/>
            </div>
        </div>
    )
}