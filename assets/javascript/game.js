/* There will be four crystals displayed as buttons on the page.
* The player will be shown a random number at the start of the game.

* When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 
    * Your game will hide this amount until the player clicks a crystal.
    * When they do click one, update the player's score counter.

* The player wins if their total score matches the random number from the beginning of the game.

* The player loses if their score goes above the random number.

* The game restarts whenever the player wins or loses.
    * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

* The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
Game design notes:

The random number shown at the start of the game should be between 19 - 120.
 Each crystal should have a random hidden value between 1 - 12.
 */



 var game = {

 	greenGemValue:  null,
 	blueGemValue:  null,
 	redGemValue:  null,
 	purpleGemValue:  null,
 	randomNumber:  0,
 	totalScore:  0,
 	wins: 0,
 	losses:  0,
 	waitingForInput:  true,

 		//initialize
 		initialize: function() {

 			this.greenGemValue = this.randomIntFromInterval(1,19);
 			this.blueGemValue = this.randomIntFromInterval(1,19);
 			this.redGemValue = this.randomIntFromInterval(1,19);
 			this.purpleGemValue = this.randomIntFromInterval(1,19);
 			this.randomNumber = this.randomIntFromInterval(19,120);
 			this.totalScore = 0;
 			this.waitingForInput = false;

 			this.displayWinLoss();
 			this.displayRandomNumber();
 			console.log(this.randomNumber);
 		},

 		displayWinLoss: function() {
 			$("#winLossDisplay").empty();
 			$("#winLossDisplay").html("<h2>WINS: " + this.wins + "</h2><h2>LOSSES: " + this.losses);
 		},

 		displayRandomNumber: function() {

 			$("#randNumbDisplay").empty();
 			$("#randNumbDisplay").html("<h2>" + this.randomNumber + "</h2>" + "<h2>Random Number</h2>");

 		},

 		randomIntFromInterval: function(min,max){

 			return Math.floor(Math.random()*(max-min+1)+min);

 		}


 	};	

$(document).ready(function() {

	//gem on click-events

	if (game.waitingForInput === true) {
		game.initialize();
	} 

	$("#greenGem").on("click", function() {
		game.totalScore += game.greenGemValue;
		$("#totalScoreDisplay").empty();
		$("#totalScoreDisplay").html("<h1>" + game.totalScore + "</h1>");
		if (game.randomNumber === game.totalScore) {
			game.waitingForInput = true;
			game.wins++;
			game.displayWinLoss();
			game.initialize();

		} else if (game.randomNumber < game.totalScore) {
			game.waitingForInput = true;
			game.losses++;
			game.displayWinLoss();
			game.initialize();
		}
	});

	$("#redGem").on("click", function() {
		game.totalScore += game.redGemValue;
		$("#totalScoreDisplay").empty();
		$("#totalScoreDisplay").html("<h1>" + game.totalScore + "</h1>");
		if (game.randomNumber === game.totalScore) {
			game.waitingForInput = true;
			game.wins++;
			game.displayWinLoss();
			game.initialize();

		} else if (game.randomNumber < game.totalScore) {
			game.waitingForInput = true;
			game.losses++;
			game.displayWinLoss();
			game.initialize();
		}
	});

	$("#blueGem").on("click", function() {
		game.totalScore += game.blueGemValue;
		$("#totalScoreDisplay").empty();
		$("#totalScoreDisplay").html("<h1>" + game.totalScore + "</h1>");
		if (game.randomNumber === game.totalScore) {
			game.waitingForInput = true;
			game.wins++;
			game.displayWinLoss();
			game.initialize();

		} else if (game.randomNumber < game.totalScore) {
			game.waitingForInput = true;
			game.losses++;
			game.displayWinLoss();
			game.initialize();
		}
	});


	$("#purpleGem").on("click", function() {
		game.totalScore += game.purpleGemValue;
		$("#totalScoreDisplay").empty();
		$("#totalScoreDisplay").html("<h1>" + game.totalScore + "</h1>");
		if (game.randomNumber === game.totalScore) {
			game.waitingForInput = true;
			game.wins++;
			game.displayWinLoss();
			game.initialize();

		} else if (game.randomNumber < game.totalScore) {
			game.waitingForInput = true;
			game.losses++;
			game.displayWinLoss();
			game.initialize();
		}
	});

});


	

	





