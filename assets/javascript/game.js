
var theRandomNumber;
//Variables for holding scores
var win = 0;
var lose = 0;
var totalScore = 0;


// At the start of the game, player will see a random number that they need to match
//Randum number shown at the start of the game should be between 19-120.
//I want to get my random number to show in my random number box id="randomnum"


//start game with a function 


var startGameReset = function (){

    $(".jewelBox").empty();


    var jewelImages = ["https://steemitimages.com/DQmcAfpAd3SM8rteLbXYxbyk5uukcqGyjC86f5ywySws4PN/crystal1.png ",
                    "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/6/6b/Versus_Crystal.png/revision/latest?cb=20150825214827", 
                    "https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/c/c3/Crystal_iso8.png/revision/latest?cb=20151121235324", 
                    "https://vignette3.wikia.nocookie.net/marvel-contestofchampions/images/8/8d/Daily_Crystal.png/revision/latest?cb=20150825213624"]


    theRandomNumber = Math.floor(Math.random() * 120) + 19;

    $("#randomnum").text("Random Number: " + theRandomNumber); 

    
    //I want this for loop to run 4 times. 4 crystals, generating random numbers each.
    for (var i = 0; i < 4; i++) {
    
         //every crystal needs to have a random number between 1-12
        var randomJewelNum = Math.floor(Math.random() * 12) + 1;
        
        var jewel = $("<div>");
    jewel.attr({"class": "jewel",
    "jewel-random-num": randomJewelNum
    });
        jewel.css({
            "background-image": "url('" + jewelImages[i] + "')",
            "background-size" : "cover"
        });


        $(".jewelBox").append(jewel);
    }
}
startGameReset();







//event delegation. New element coming in the dom and with click, passes .jewel function
$(document).on("click", ".jewel", function (){

    //this gets turned into a number instead of a string
  var num = parseInt($(this).attr("jewel-random-num"));
    //this adds numbers 
  totalScore += num;
   
    $(".totalScore").html("Total Score: " + totalScore);

    //conditional logic, if players number is greater or less than given number

    if ( totalScore === theRandomNumber){
        win++;


        $(".wins").html("Wins: " + win);
        totalScore = 0;
        startGameReset();

    } else if (totalScore > theRandomNumber){
        lose++;

     

        $(".lost").html("Losses: " + lose);
        totalScore = 0;
        startGameReset();
}
});






//When the player clicks on a crystal it will add a specific amount of points to the players total score. 

//Your game will hide this amount until the player clicks a crystal

//When they do click one, update the player's score counter.

//The player wins if their total score matches the random number from the beginning of the game

//The player loses if their score matches the random number from the beginning of the game

// The player loses if their score goes above the random number

// The game restarts whenever the player wins or loses

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//The app should show the number of games the player wins or loses. To that end, do not refresh the page as a means to restart the game.