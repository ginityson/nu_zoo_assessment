console.log('Bam! in scripts.js');

  $(document).ready(function(){
    console.log( 'checking on the jquery');
    $('#addAnimalButton').on('click', function(){

      //look into this is, for preventing spamming button
      event.preventDefault();
      getAnimals();
      //get a value for the animalNameIn
      var animalName = $ ( '#animalNameIn' ).val();
      console.log( 'cought the animalName: ' + animalName );


    //create animalObject to send
    var animalObjectToSend = {
      'animalfield': animalName
    };//end animalObjectToSend

    //ajax call/post for /animalTrack remember post needs success
    $.ajax({
      type: 'POST',
      url: '/animalTrack',
      data: animalObjectToSend,
      success: function (data) {
        exhibitAnimals(data);
      }//end of success
    });//end ajax POST
  });//end addAnimalButton click

    function getAnimals() {
      //get the animals back from database zooDB
    $.ajax({
        type: 'GET',
        url: '/displayAnimals',
        success: function( data ) {
          exhibitAnimals( data );
      }//end of success
    });//end of ajax GET
  }//end of function getAnimals


  function exhibitAnimals( critters ){
    console.log( "in exhibitAnimals: " + critters );
    // empty output div and input field
  $( '#animalIn' ).val( "" );
  $( '#outputDiv' ).empty();
  // append each row to output div
  for( var i=0; i<critters.length; i++ ){
      $( '#outputDiv' ).append( '<p><b>animal: ' + critters[ i ].animalfield + '</b></p>' );
    }//end the for loop
  } //end function exhibitAnimals
});//end document ready?
