const express    = require('express');
const router     = express.Router();
const bodyParser = require('body-parser');
var   movies     = require('./data/movies');

const app = express();

// Get data config for Post
app.use( bodyParser.urlencoded({ extended: true }) );
app.use( bodyParser.json() );

// Index page
router.get('/', ( req, res ) => {
  res.json({ movies: movies.allMovies });
});

// All movies
router.get('/movies', ( req, res ) => {
  res.json({ movies: movies.allMovies });
});

// Get a movie
router.get('/movie/:id', ( req, res ) => {
  const movie =
    movies.allMovies.find( movie => movie.id === parseInt( req.params.id ) );

  res.json( { movie } );
});

// Create a movie
router.post('/movies', ( req, res ) => {
  let movie = {
    id: movies.allMovies.length + 1,
    name: req.body.name,
    director: req.body.director,
    actor: req.body.actor,
    releasedDate: new Date().getTime(),
  };

  movies.allMovies.push( movie );

  res.json( { movies: movies.allMovies });
});

// Update a movie
router.put('/movie/:id', ( req, res ) => {
  let movie =
    movies.allMovies.find( movie => movie.id === parseInt( req.params.id ) );

  movie.name     = req.body.name;
  movie.director = req.body.director;
  movie.actor    = req.body.actor;

  res.json( { movies: movies.allMovies });
});

// Delete a movie
router.delete('/movie/:id', ( req, res ) => {
  movies.allMovies =
    movies.allMovies.filter( movies => movies.id !== parseInt( req.params.id ) );

  res.json( { movies: movies.allMovies });
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Running on PORT 3000');
});
