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

//require my randomNumber module
//var randomNumber = require('/modules/randomNumber');

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

//post route for /animalTrack
app.post("/animalTrack", urlencodedParser, function( req, res ) {
  console.log( 'comming at you from the POST : ' +  req.body.animalfield);

  pg.connect( connectionString, function(err, client, done){
    client.query("INSERT INTO animal_table (animalfield) VALUES ($1)", [req.body.animalfield]);
    //
    // INSERT INTO contacts (numbers)
    // SELECT distinct array[
    //         (random() * 99999999)::integer,
    //         (random() * 99999999)::integer,
    //         (random() * 99999999)::integer,
    //         (random() * 99999999)::integer
    //     ]
    // FROM generate_series(1, 1000000) AS x(id);


    res.send( true );
  });//end of connect
    });//end of post

//  url get /displayanimals
app.get( '/displayAnimals', function( req, res ) {
  console.log( 'Yea! We can see the animals in displayAnimals' );
  //get all animals from the database
  pg.connect( connectionString, function( err, client, done){
    if( err ) {
      console.log( err );
    }//end of if
    else {
      //animal Array
      var animalResults = [];
      var allAnimals = client.query( 'SELECT * FROM animal_table ORDER BY id DESC' );
    //}//end of else

    //for each row of animals
    allAnimals.on( 'row', function ( row ) {
      //push onto animalResults array
      animalResults.push( row );
    });//end of row of animals

      //why is this here exactly
    allAnimals.on( 'end', function(){
      done();
        //return animalResults array back as rows in json
        return res.json( animalResults );
    });//end of end
  }//end of pg.connect
});//end of displayAnimals//
});
