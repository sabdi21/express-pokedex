var express = require('express');
var router = express.Router();
require('dotenv').config();
var db = require('../models');

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll()
  .then((poke) => 
    res.render('pokemon/show', { poke})
  )
  .catch((err) => {
    console.log('ERROR HAPPENED', err)
  })
});

// GET /pokemon - return a page with favorited Pokemon
router.get('/', function(req, res) {
  // TODO: Get all records from the DB and render to view
  db.pokemon.findAll()
  .then((poke)=>{
    res.render('pokemon/show',{ poke})
  })
  .catch((err)=>{
    console.log('err',err)
    res.render('404')
  })
});

// POST /pokemon - receive the name of a pokemon and add it to the database
router.post('/', function(req, res,) {
  // TODO: Get form data and add a new record to DB
  db.pokemon.create(req.body)
  .then((poke) => {
    res.redirect('pokemon');
  })
  .catch((err) => {
    console.log('ERROR HAPPENED', err)
  })
});

module.exports = router;
