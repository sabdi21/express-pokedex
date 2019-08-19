require('dotenv').config();
const express = require('express');
const axios = require('axios'); 
const ejsLayouts = require('express-ejs-layouts');
const app = express();
var db = require('./models'); // Make sure to require your models in the files where they will be used.
const request = require('request');

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// GET / - main index of site
app.get('/', function(req, res) {
  var pokemonUrl = 'http://pokeapi.co/api/v2/pokemon/';
  // Use request to call the API
  request(pokemonUrl, (error, response, body) => {
    var pokemon = JSON.parse(body).results;
    console.log(pokemon);
    res.render('index', { pokemon: pokemon.slice(0, 151) });
  })
  // axios.get(pokemonUrl).then( function(apiResponse) {
  //   var pokemon = apiResponse.data.results;
  //   res.render('index', { pokemon: pokemon.slice(0, 151) });
  // })
});

// Imports all routes from the pokemon routes file
app.use('/pokemon', require('./routes/pokemon'));

var server = app.listen(process.env.PORT || 3000);

module.exports = server;
