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

 $(document).ready(function() {

 	
 	var greenGemValue = null;
 	var blueGemValue = null;
 	var redGemValue = null;
 	var purpleGemValue = null;
 	var randomNumber = null;
 	var totalScore = 0;
 	var wins = 0;
 	var losses = 0;

 	
 	function startGame() {

		greenGemValue = randomIntFromInterval(1,19);
 		blueGemValue = randomIntFromInterval(1,19);
 		redGemValue = randomIntFromInterval(1,19);
 		purpleGemValue = randomIntFromInterval(1,19);
 		randomNumber = randomIntFromInterval(19,120);
 		totalScore = 0;
 		wins = 0;
 		losses = 0;

 		function displayWinLoss() {
 			$("#winLossDisplay").empty();
 			$("#winLossDisplay").html("<h2>WINS: " + wins + "</h2><h2>LOSSES: " + losses);
 		}

 		function displayRandomNumber() {
 			
 			$("#randNumbDisplay").empty();
			$("#randNumbDisplay").html("<h2>" + randomNumber + "</h2><h2>Random Number</h2>");

 		};

 		function randomIntFromInterval(min,max){
    		
    		return Math.floor(Math.random()*(max-min+1)+min);
			
		};

		displayWinLoss();
		displayRandomNumber();


	

		$(gemId).on("click", function(gemValue) {
		
			totalScore += gemValue;
			$("#totalScoreDisplay").empty();
			$("#totalScoreDisplay").html("<h1>" + totalScore + "</h1>")
		}
 
 	
 	
 		$("#blueGem").on("click", function() {
 			totalScore += blueGemValue;
			$("#totalScoreDisplay").empty();
			$("#totalScoreDisplay").html("<h1>" + totalScore + "</h1>")
 		});	

 		$("#redGem").on("click", function() {
 			totalScore += redGemValue;
			$("#totalScoreDisplay").empty();
			$("#totalScoreDisplay").html("<h1>" + totalScore + "</h1>")

 		});
	
 		$("#purpleGem").on("click", function() {
 			totalScore += purpleGemValue;
			$("#totalScoreDisplay").empty();
			$("#totalScoreDisplay").html("<h1>" + totalScore + "</h1>")
 		});

	};

 	startGame();
 	


});
		


