'use strict'

//when writing code

// how to declare a variable
// variable is a label for something. 

// let is required. it tells us that we are about to start declaring a variable
// potato is the name of the variable
// after the = is the value of the variable
// a sentance for this would be "The Variable potato is equal to the value of Belle"
let potato = 'Belle';

// You can have as many variables as you wish
// however, you should probably use all the variables define

//a prompt is a popup that asks for text back...usually this prompt is a question
let name = prompt('What is your name?');
let breakfast = prompt('What do you like for Sunday Breakfast?');

alert(name + ' likes ' + breakfast + ' for breakfast ');

// document.write write out to the document that is calling this js file, the text that we are sending it. 
// in this case, we are sending it <h2> Amanda </h2>
document.write(name);

// an alert is just a popup that tells you something

// asks the user to guess my favorite number

let answer = prompt('What day of the week is it?');

let response = '';
// if statement
// if statments tell us if something meets a condition

// In JS...to get an exact equivelant..it's a "strict equal" (===)


if (answer ===  'Sunday') {
    response = 'Happy Sunday!';
} else if( answer === 'Friday'){
    response = 'Happy Fri-Yay!';
} else if(answer === 'Wednesday'){
    response='Happy Wed'
}
else{
    response = 'you win';
}

document.write(response);