var pos = 0, wrongPos=0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
//setting variables

var quizAnswers = [];
var wrongAnswers = [];


/* old way	
var questions= [
{
	['Who is the current manager of Manchester United?'
	['Who is the most decorated club footballer in the world?'
	['Who has the best left foot in the world?'
	['Who scored a famous goal for Leeds Utd against Man Utd in the FA Cup in 2008/2009?'
	['Where do Inch Crusaders train??'
	['How many goals has Eric Griffin scored from set pieces?'
	['Who won Inch Crusaders young player of the year award 2015?'
	['How much did Chelsea pay to sign Fernando Torres for in 2011 off Liverpool?'
	['What famous thing did Peter Crouch say he would be if he wasnt a footballer?'
	['Who slipped in the Champions League final penalty shootout in 2007/2008?'
	['Who did Liverpool beat in the Champions League Final 2005?'
	['Who had a bust up with PJ Hehir at a Fern Celtic training session in 2014?'
	['What is Brendan Rodgers favourite saying?'
	['What is Wayne Rooneys nickname?'
	['What former Liverpool assistant manager took over West Brom?'
	['What player has played in the manchester derby, merseyside derby, london derby and old firm derby?'
	['Which former clare hurler was once on trial for an english soccer club?'
	['Which former Manchester Utd player is fluent Irish speaking despite not being Irish?',]
];
*/

//function which takes an array and shuffles its contents 
//used to get different order of multiple choice answers

function shuffleArray(array){
	for (var i = array.length - 1; i > 0; i--)
	{
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}

var questions=[
	{
		question: "Who is the current manager of Manchester United?",//question
		correctAnswer: "Jose Mourinho",//right answer to question
		
		//list of multiple choice answers
		answer0: "Jose Mourinho",
		answer1: "John Cena",
		answer2: "Jurgen Klopp",
		answer3: "Roy Hodgson"
	},
	{

	question: "Who is the most decorated club footballer in the world?",//question
	correctAnswer: "Maxwell",//right answer to question

	//list of multiple choice answers
	answer0: "Dani Alves",
	answer1: "Elano",
	answer2: "Maxwell",
	answer3: "Paul Konchesky"
	},
	
	{
		question:"Who has the best left foot in the world?",//question
		correctAnswer: "John Arne Riise",//right answer to question

	//list of multiple choice answers
	answer0: "Mark 'Monkey' Gavin",
	answer1: "Shay Malone",
	answer2: "John Arne Riise",
	answer3: "Eoin Cleary"
	},
	
	{
		question:"Who scored a famous goal for Leeds Utd against Man Utd in the FA Cup in 2008/2009?",//question
		correctAnswer: "Jermaine Beckford",//right answer to question

	//list of multiple choice answers
	answer0: "Dylan McGerr",
	answer1: "Samuel Etoo",
	answer2: "Steve Bruce",
	answer3: "Jermaine Beckford"
	},
	
	{

	question: "Where do Inch Crusaders train?",//question
	correctAnswer: "Kilmaley astro turf",//right answer to question

	//list of multiple choice answers
	answer0: "Kilmaley astro turf",
	answer1: "Lees road",
	answer2: "Melwood",
	answer3: "Caherlohan centre of excellence Tulla"
	},
	
	{

	question: "How many goals has Eric Griffin scored from set pieces?",//question
	correctAnswer: "1",//right answer to question

	//list of multiple choice answers
	answer0: "1",
	answer1: "2",
	answer2: "3",
	answer3: "4"
	},
	
	{

	question: "Who won Inch Crusaders young player of the year award 2015?",//question
	correctAnswer: "Niall Gavin",//right answer to question

	//list of multiple choice answers
	answer0: "Niall Gavin",
	answer1: "Ant and Dec",
	answer2: "Paul Dolan",
	answer3: "Joe Neylon"
	},
	
	{

	question: "How much did Chelsea pay to sign Fernando Torres for in 2011 off Liverpool?",//question
	correctAnswer: "50 million",//right answer to question

	//list of multiple choice answers
	answer0: "50 Million",
	answer1: "€60",
	answer2: "150 million",
	answer3: "€2.50"
	},
	
	{

	question: "What famous thing did Peter Crouch say he would be if he wasnt a footballer?",//question
	correctAnswer: "A virgin",//right answer to question

	//list of multiple choice answers
	answer0: "Virgin",
	answer1: "Plumber",
	answer2: "Vegan",
	answer3: "Vetenarian"
	},
	
	{

	question: "Who won the Premier League 2015/2016 season?",//question
	correctAnswer: "Leicester City",//right answer to question

	//list of multiple choice answers
	answer0: "Leicester City",
	answer1: "Avenue Utd",
	answer2: "Man Utd",
	answer3: "Watford"
	},
	
	{

	question: "Who slipped in the Champions League final penalty shootout in 2007/2008?",//question
	correctAnswer: "John Terry",//right answer to question

	//list of multiple choice answers
	answer0: "John Terry",
	answer1: "Nicholas Anelka",
	answer2: "Carlos Tevez",
	answer3: "Sir Alex Ferguson"
	},
	
	{

	question: "Who did Liverpool beat in the Champions League Final 2005?",//question
	correctAnswer: "AC Milan",//right answer to question

	//list of multiple choice answers
	answer0: "AC Milan",
	answer1: "Man Utd",
	answer2: "Nottingham Forest",
	answer3: "Inch Crusaders"
	},
	
	{

	question: "What position did Pepe Reina play in?",//question
	correctAnswer: "Goalkeeper",//right answer to question

	//list of multiple choice answers
	answer0: "Goalkeeper",
	answer1: "Sweeper",
	answer2: "Third midfielder",
	answer3: "Striker"
	},
	
	{

	question: "Who had a bust up with PJ Hehir at a Fern Celtic training session in 2014?",//question
	correctAnswer: "Liam Foley",//right answer to question

	//list of multiple choice answers
	answer0: "Brian Malone",
	answer1: "Mamadou Sakho",
	answer2: "Liam Foley",
	answer3: "Leonard Meaney"
	},
	
	{

	question: "What is Brendan Rodgers favourite saying?",//question
	correctAnswer: "I thought we were magnificent",//right answer to question

	//list of multiple choice answers
	answer0: "I thought we were magnificent",
	answer1: "Can anybody take my unbeaten",
	answer2: "Lets go dancing",
	answer3: "I thought we were unlucky"
	},
	
	{

	question: "What is Wayne Rooneys nickname",//question
	correctAnswer: "Wazza",//right answer to question

	//list of multiple choice answers
	answer0: "Wazza",
	answer1: "Shrek",
	answer2: "Rooney",
	answer3: "Bosh"
	},
	
	{

	question: "What former Liverpool assistant manager took over West Brom?",//question
	correctAnswer: "Steve Clarke",//right answer to question

	//list of multiple choice answers
	answer0: "Steve Clarke",
	answer1: "Joe Brolly",
	answer2: "Donal Og Cusack",
	answer3: "Sammy Lee"
	},
	
	{

	question: "What player has played in the manchester derby, merseyside derby, london derby and old firm derby?",//question
	correctAnswer: "Kolo Toure",//right answer to question

	//list of multiple choice answers
	answer0: "Kolo Toure",
	answer1: "Phil Neville",
	answer2: "Craig Bellamy",
	answer3: "Dylan Messi O Loughlin"
	},
	
	{

	question: "Which former clare hurler was once on trial for an english soccer club?",//question
	correctAnswer: "Colin Ryan",//right answer to question

	//list of multiple choice answers
	answer0: "Colin Ryan",
	answer1: "Fergal Lynch",
	answer2: "Tony Griffin",
	answer3: "Dean Minogue"
	},
	
	{

	question: "Which former Manchester Utd player is fluent Irish speaking despite not being Irish?",//question
	correctAnswer: "Darren Fletcher",//right answer to question

	//list of multiple choice answers
	answer0: "Darren Fletcher",
	answer1: "Gabriel Heinze",
	answer2: "Ashley Young",
	answer3: "Teddy Sheringham"
	},
];

	
function _(x)


{ 
    return document.getElementById(x);
} 
//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

function renderQuestion()
{
	var quizAnswers = [];

	test = _("test");
	test_status = _("test_status");
	wrong = _("wrong");
	
	if(pos >= questions.length)
	{
		test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct(" +percent() + "%)</h2> <button onclick='Print()'>Print result</button>";
		test_status.innerHTML += " Thank you for completing the quiz"; 
		pos = 0;
		correct = 0;
		
		wrong.innerHTML = "<h2>Wrong answers:</h2>";
		for (i = 0; i < wrongPos; i++) {
			wrong.innerHTML += "<b>Question: </b>" + wrongAnswers[i].question + "<br>";
			wrong.innerHTML += "<b>Answer: </b>" + wrongAnswers[i].correctAnswer + "<br><br>";
		}
		return false;
	}
	
	var bar=document.getElementById("progressBar");
	test_status.innerHTML = "Question "+(pos+1)+" of "+questions.length;
	bar.value = (pos+1);
	
	//push all potential answers to the quizAnswers array
	quizAnswers[0] = questions[pos].answer0;
	quizAnswers[1] = questions[pos].answer1;
	quizAnswers[2] = questions[pos].answer2;
	quizAnswers[3] = questions[pos].answer3;
	
	console.log("Unshuffled answers" + quizAnswers);
	
	//Shuffle the answers
	var shuffledAnswers =  shuffleArray(quizAnswers);
	
	console.log("Shuffled answers" + shuffledAnswers);
	
	question = questions[pos].question;//question is in position 0 in the array(zero indexed)
	choiceA = shuffledAnswers[0]; //choice A is in position 1 in the array
	choiceB = shuffledAnswers[1]; //choice B is in position 2 in the array
	choiceC = shuffledAnswers[2]; //choice C is in position 3 in the array
	choiceD = shuffledAnswers[3]; //choice D is in position 4 in the array


/* question = questions[pos].question;//question is in position 0 in the  array( zero indexed)
choiceA = questions[pos].answer0; //choice A is in position 1 in the array
choiceB = questions[pos].answer1; //choice B is in position 2 in the array
choiceC = questions[pos].answer2; //choice C is in position 3 in the array
choiceD = questions[pos].answer3; //choice D is in position 4 in the array */

test.innerHTML = "<h3>"+question+"</h3>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; 
test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"' checked> "+choiceB+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"' checked> "+choiceC+"<br>";
test.innerHTML += "<input type='radio' name='choices' value='"+choiceD+"' checked> "+choiceD+"<br><br>";
test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer()
{
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++)
	{
		if(choices[i].checked)
		{
			choice = choices[i].value;
		}
	}
if(choice == questions[pos].correctAnswer)
{
	/* alert('Correct!"'); */
	correct++;
}
else 
{
	/* alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer); */
	wrongAnswers[wrongPos] = questions[pos];
	wrongPos++;
}
pos++;
renderQuestion();

}

function Print() {
	window.print();
}



//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);