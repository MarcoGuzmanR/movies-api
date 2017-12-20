const express = require('express');
const router  = express.Router();
var   movies  = require('./data/movies');

const app = express();

router.get('/', ( req, res ) => {
  res.json({ movies: movies.allMovies });
});

app.use('/', router);

app.listen(3000, () => {
  console.log('Running on PORT 3000');
});
