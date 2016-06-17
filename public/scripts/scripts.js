console.log('Bam! in scripts.js');

  $(document).ready(function(){
    $('#submit-button').on('click', function(){

      console.log("Zoo Button Clicked!");
    });//end submit-button




    function getData() {
    $.ajax({
        type: 'GET',
        url: '/records',
        success: function( data ) {
        exhibitAnimals( data );
        }
    });
}
function postData() {
  var animalToSend = {
  "animalfield": ( '#animalIn' ).val()

};
    $.ajax({
      type: 'POST',
      url: '/animalTrack',
      data: animalToSend
    });//end ajax
    getData();
  }//end postData


function exhibitAnimals( critters ){
  console.log( "in exhibitAnimals: " + critters );
  // empty output div and input field
  $( '#animalIn' ).val( "" );
  $( '#outputDiv' ).empty();
  // append each row to output div
  for( var i=0; i<critters.length; i++ ){
      $( '#outputDiv' ).append( '<p><b>animal: ' + critters[ i ].animalfield + '</b></p>' );
    }
}
});//end document ready?
