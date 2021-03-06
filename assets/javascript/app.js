  


   $(document).ready(function() {


// Create a function that creates the start button and initial screen


    function initialScreen() {
	startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".mainArea").html(startScreen);
}



    initialScreen();


    $("body").on("click", ".start-button", function(event){
	event.preventDefault();  
	clickSound.play();
	generateHTML();

	timerWrapper();



}); // Closes start-button click

    $("body").on("click", ".answer", function(event){
	
	//answeredQuestion = true;
	

	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		//alert("wrong answer!");
		
		clearInterval(theClock);
		generateLoss();
	}


}); // Close .answer click

    $("body").on("click", ".reset-button", function(event){
	clickSound.play();
	resetGame();
}); 
     // Closes reset-button click



});  

    function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1000);  
}

    function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1000);  
}

    function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 1000); 
}

    function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>20</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

    function wait() {
	if (questionCounter < 8) {
	questionCounter++;
	generateHTML();
	counter = 20;
	timerWrapper();
	}
	else {
		finalScreen();
	}
   

}


       function timerWrapper() {
	   theClock = setInterval(twentySeconds, 1000);
	   function twentySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

    function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".mainArea").html(gameHTML);
}

   function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 20;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 20;
var questionArray = ["What is the capital of Nigeria?", "What is the capital of Australia?", "What is the capital of Liberia?", "What is the capital of Taiwan?", "What is the capital of Japan?", "What is the capital of China?", "What is the capital of Turkey?", "What is the capital of Colombia?", "What is the capital of India?"];
var answerArray = [["Lagos", "Enugu", "Portharcourt", "Abuja"], ["Canberra", "Melbourne", "Sydney", "Darwin"], ["Arthington","Monrovia","Tuzon","Marshall"], ["Tainan City", "Taichung", "Taipei", "Hsinchu"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var imageArray = ["<img class='center-block img-right' src='assets/images/Nigeria.png'>", "<img class='center-block img-right' src='assets/images/australia.png'>", "<img class='center-block img-right' src='assets/images/liberia.png'>", "<img class='center-block img-right' src='assets/images/taiwan.png'>", "<img class='center-block img-right' src='assets/images/japan.png'>", "<img class='center-block img-right' src='assets/images/china.png'>", "<img class='center-block img-right' src='assets/images/turkey.png'>", "<img class='center-block img-right' src='assets/images/colombia.png'>", "<img class='center-block img-right' src='assets/images/india.png'>"];
var correctAnswers = ["D. Abuja", "A. Canberra", "B. Monrovia", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
var clickSound = new Audio("sound/button-click.mp3");





