//require express
var express = require('express');
//create express app
var app = express();
//require path
var path = require('path');
//require bodyParser
var bodyParser = require( 'body-parser');

var urlencodedParser = bodyParser.urlencoded( {extended: false} );
//require pg
var pg = require ( 'pg');

var connectionString =  ('postgres://localhost:5432/zooDB');

//spin up server
app.listen( 3000, 'localhost', function(req, res) {
  console.log('server listening on port 3000');
});

//set up static route for public folder
app.use(express.static('public'));

// base url
app.get( '/', function( req, res ){
  console.log( 'Ta Da! base url get' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

//
app.post("/animalTrack", urlencodedParser, function(res, req) {
  console.log( 'comming at you from the POST : ' +  req.body.animalfield);
  
  pg.connect( connectionString, function(err, client, done){
    client.query("INSERT INTO animal_table (animalfield) VALUES ($1)", [req.body.animalfield]);
  });
});
//
