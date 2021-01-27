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

// Considered Movie Enpoints
const consideredController = require('./consideredController')
app.get('/api/considered', consideredController.getAllConsideredMovies)
app.post('/api/considered', consideredController.considerMovie)
app.delete('/api/considered/:id', consideredController.unconsiderMovie)


const port = 5555
app.listen(port, console.log(`Listening on port: ${port}`))