var testString = "";


var element = document.getElementById('text');

var p = document.getElementById('p').innerHTML;

var button = document.getElementById('button');

// listener
button.addEventListener("click", stringFunc);


// input: string
// returns: string
function reversal(input) {
	var output = input.split('').reverse().join('');
	return output;
}

// input: string
// output: string with letters sorted by alpha
function alphabits(input) {
	var output = input.split('').sort().join('');
	return output;
}

// input: string
// output: boolean indicating if the input is a palindrome
function palindrome(input) {
	var output = input === reversal(input);
	return output;
}


// Calls

function stringFunc() {

	var input = element.value;
	console.log(input);

	reversal(input);
	alphabits(input);
	palindrome(input);

};





