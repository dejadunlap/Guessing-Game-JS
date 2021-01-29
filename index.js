//checks if the user wants to play
var playingGame = prompt("Would you like to play? (Y/N)");

//checks if the user still wants to play before starting another round
while (playingGame == "Y"){

var randomNum = Math.round(Math.random() * 100);
var userGuess = prompt("I'm thinkin of a number between 1-100. Can you guess it?");

//gives the user clues about their hints
while (userGuess != randomNum){
  if (userGuess > randomNum + 10 ){
    console.log("Way Too high");
  } else if (userGuess < randomNum - 10){
    console.log("Way Too Low")
  }  else if (userGuess > randomNum ){
    console.log("Closer, still too high");
  } else if (userGuess < randomNum){
    console.log("Closer, still too low");
  }
  userGuess = prompt("Try again");
}

console.log("Hooray you got it! The number was: " + randomNum);

playingGame = prompt("Do you want to play again? (Y/N)");
}

console.log("Ok, goodbye!");
