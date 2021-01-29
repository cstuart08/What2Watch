let data = require('../src/data.json')
let id = data[data.length -1].id + 1 // WILL THIS CODE WORK?

module.exports = {
    getAllMovies: (req, res) => {
        const {title, rating, genres} = req.query
        let movies = [...data]

        if (title  && title != "") {
            movies = movies.filter(e => e.title.toLowerCase().includes(title.toLowerCase()))
        }

        if (rating && rating != "") {
            movies = movies.filter(e => e.stars === +rating)
        }

        if (genres && genres != "") {
            let arrayOfGenres = genres.split(",")
            let lowerCasedGenres = arrayOfGenres.map( e => {
                return e.toLowerCase()
            })
            let filteredMoviesByGenres = []
            for (let i = 0; i < genres.length; i++) {
                for (let j = 0; j < movies.length; j++) {
                    if (movies[j].genres.includes(lowerCasedGenres[i])) {
                        filteredMoviesByGenres.push(movies[j])
                    }
                }
            }
            movies = filteredMoviesByGenres
        }
        let moviesSorted = movies.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 1
            }
        })
        res.status(200).send(moviesSorted)
    },
    getMovieByID: (req, res) => {
        const {id} = req.params
        let foundIndex = data.findIndex( e => e.id === +id)

        if (foundIndex === -1) {
            res.status(404).send("Unable to get movie: movie ID not found.")
        } else {
            res.status(200).send(data[foundIndex])
        }
    },
    addMovie: (req, res) => {
        const {title, year, genres, length, posterPath, summary, stars, ageRating, formats} = req.body
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
        id++
        let moviesSorted = data.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else {
                return 1
            }
        })
        res.status(200).send(moviesSorted)
    },
    updateMovie: (req, res) => {
        const {title, year, genres, length, posterPath, summary, stars, ageRating, formats} = req.body
        const {id} = req.params

        let foundIndex = data.findIndex( e => e.id === +id)

        if (foundIndex === -1) {
            res.status(404).send("Unable to update a movie: movie not found.")
        } else {
            data[foundIndex] = {
                id: +id,
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
            let moviesSorted = data.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else {
                    return 1
                }
            })
            res.status(200).send(moviesSorted) // Decide what to do here. Send back single movie? Or entire array of data?
        }
    },
    deleteMovie: (req, res) => {
    	const {id} = req.params
    	let foundIndex = data.findIndex( e => e.id === +id)
    	if (foundIndex === -1) {
            res.status(404).send("Unable to delete a movie: movie not found.")
        } else {
            data.splice(foundIndex, 1)
            let moviesSorted = data.sort((a, b) => {
                if (a.title.toLowerCase() < b.title.toLowerCase()) {
                    return -1
                } else {
                    return 1
                }
            })
            res.status(200).send(moviesSorted)
        }
    }
}
