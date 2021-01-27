let data = require('../src/consideredMovies.json')

module.exports = {
    getAllConsideredMovies: (req, res) => {
        console.log("getting all considered movies....")
        res.status(200).send(data)
    },
    considerMovie: (req, res) => {
        console.log("considering a movie....")
        const {id, title, year, genres, length, posterPath, summary, stars, ageRating, formats} = req.body
        const movie = {
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
        data.push(movie)
        res.status(200).send(data)
    },
    unconsiderMovie: (req, res) => {
        console.log("unconsidering a movie....")
    	const {id} = req.params
    	let foundIndex = data.findIndex( e => e.id === +id)
    	if (foundIndex === -1) {
            res.status(404).send("Unable to unconsider a movie: movie not found.")
        } else {
            data.splice(foundIndex, 1)
            res.status(200).send(data)
        }
    }
}
