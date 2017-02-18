var testString = "";


var textInput = document.getElementById('text');
var test = textInput.value;

var test = document.getElementById('p');


// functions

function reversal(testString) {

	output.innerHTML = testString.reverse();
	console.log(output.innerHTML);

}

function alphabits() {

}

function palindrome() {

}


// Calls

function stringFunc() {

	output.innerHTML = testString;
	console.log(testString);

	// reversal(testString);
	// alphabits(testString);
	// palindrome(testString);

};

// listener

button.addEventListener("click", stringFunc);

