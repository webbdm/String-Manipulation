var testString = "abc";


var element = document.getElementById('text');
var p = document.getElementById('p');
var button = document.getElementById('button');


function reversal(input) {
	var output = input.split('').reverse().join('');
	return output;
}


function alphabits(input) {
	var output = input.split('').sort().join('');
	return output;
}


function palindrome(input) {
	var output = (input === reversal(input));
	return output;
}


function write(input) {
	p.innerHTML += '<p>'+input+'</p>';
}


function stringFunc(value) {
	write(value);
	write(reversal(value));
	write(alphabits(value));
	write(palindrome(value));
};

// listener
button.addEventListener("click", function() {
	stringFunc(element.value);
});




