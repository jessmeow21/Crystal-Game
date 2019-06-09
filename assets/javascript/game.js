
//Need buttons to be on crystals


// At the start of the game, player will see a random number
//random number generator, new number every time it restarts
//Randum number shown at the start of the game should be between 19-120.
//Each crystal should have a random hidden value between 1-12

var random = Math.floor(Math.random() * 100) + 1;
console.log(random);


// var randomnum = document.write(Math.floor((Math.random() * 100) + 1));
// document.write(randomnum);

//When the player clicks on a crystal it will add a specific amount of points to the players total score. 

//Your game will hide this amount until the player clicks a crystal
//When they do click one, update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game

//The player loses if their score matches the random number from the beginning of the game

// The player loses if their score goes above the random number

// The game restarts whenever the player wins or loses

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins or loses. To that end, do not refresh the page as a means to restart the game.