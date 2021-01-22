const express = require('express')

let app = express()

app.use(express.json())

// Movie Endpoints
const movieController = require('./movieController')
app.get('/api/movies', movieController.getAllMovies)
app.get('/api/movies/:id', movieController.getMovieByID)
app.post('/api/movies', movieController.addMovie)
app.put('/api/movies/:id', movieController.updateMovie)
app.delete('/api/movies/:id', movieController.deleteMovie)

const port = 5555
app.listen(port, console.log(`Listening on port: ${port}`))