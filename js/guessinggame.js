function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var randnum = Math.floor(getRandomArbitrary(0, 100));

var counter = 0;

// Why does lastguess have to be outside?
var lastguess = 0;

// Why can't I add "var guessednum" directly into the jQuery?
var guessednum;
$(document).ready(function(){
  $("#guess").on("click", function(){
  		//Grab the input of the guess field
		guessednum = Number($("#inputNumber").val());  
		event.preventDefault();

		// To track the guesses

		// Get the difference in absolute value
		difference = randnum - guessednum;	

		  	// Limit them to 4 tries
  	if (counter < 3) {
  		// *If the newest guess 

	//	return guessednum;  
	// Why can't I use (Math.abs(randnum - guessednum)?
	//	var difference = randnum - guessednum;

		if (difference == 0) {
			$( ".guess-body" ).css( "background-color","#FFF");
			$( ".guess-body" ).css( "color","#000");
			$( "#instruction" ).replaceWith( "<h1 id='instruction' style='font-size: 90px;'>YOU WIN!</h2>" );
			$( "#instruction" ).animate({
			    width: "100%",
			    fontSize: "19em",
			    opacity: 1.0,
			    borderWidth: "10px"}, 3000);
		}

		else if(Math.abs(difference) <= 10) {
		// Compare it

		//	if (difference <= 10 || difference <= -10) {
			$( "#instruction" ).replaceWith( "<h2 id='instruction'>You're Hot! Keep Trying!</h2>" );
			counter++;
			$( "#guessesremaining" ).replaceWith( "<h2 id='guessesremaining'>"+(3 - counter)+" Guesses Remaining</h2>" );
			lastguess = guessednum;
		//	return difference;
			}
			else {
				$( "#instruction" ).replaceWith( "<h2 id='instruction'>You're Cold! Keep Trying!</h2>" );
				counter++;
				$( "#guessesremaining" ).replaceWith( "<h2 id='guessesremaining'>"+(3 - counter)+" Guesses Remaining</h2>" );//		return difference;
				lastguess = guessednum;
				};
	}
	else {
		counter++;
			$( "#instruction" ).replaceWith( "<h2 id='instruction'>You've gone too many times!</h2>" );		
	}
  });
});

$(document).ready(function(){
  $("#reset").on("click", function(){
  	counter = 0;
  		$( "#instruction" ).replaceWith( "<h2 id='instruction'>Guess a number between 1 and 100.</h2>" );		
 		$( "#guessesremaining" ).replaceWith( "<h2 id='guessesremaining'>3 Guesses Remaining</h2>" );//		return difference;
 		$( ".guess-body" ).css( "background-color","#000");
  });
});


$(document).ready(function(){
  $("#hint").on("click", function(){
  	return confirm("The number is " + randnum + "!")
  });
});

// NEXT STEP: compare 2nd and 3rd guesses' difference to the previous difference to see if it's COLDER or HOTTER

// Check which is bigger
// Then find the difference
// if (Math.abs(randnum - guessednum) <= 10) {
// 	$( ".btn-group" ).after( "<p>You're Hot! Keep Trying!</p>" );
// 	}
// 	else {
// 		$( ".btn-group" ).after( "<p>You're Cold! Keep Trying!</p>" );
// 		};

// $(document).ready(function(){
//   $(".guessesremaining").text(" # Remaining")
    
//   });

