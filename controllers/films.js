//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var Router  = express.Router
var filmRouter = new Router();

var Films = require('../client/src/models/films');
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var films = new Films();

filmRouter.get('/', function(req, res){
  console.log("filmses");
  res.json(films)
});

filmRouter.get('/:id', function(req, res){
  console.log("filmes 1")
  var film = films[ req.params.id ];
  res.json(film);
});

filmRouter.post('/', function(req, res){
  films.push( req.body.film );
  res.json(films);
});

filmRouter.put('/:id', function(req, res){
  var updatedFilm = req.body.film;
  films[req.params.id] = updateFilm;
  res.json(films);
})

filmRouter.delete('/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json( films );

})


module.exports = filmRouter;
