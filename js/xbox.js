'use strict'

function numberbox(){
    let num1 = prompt('How many games do you play?');
    let num2 = prompt('How many hours do you play a day?');
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);
    
    
    let table = prompt('Do you want to Multiply, Divide, Add, or Subtract');
    let response ='';
    if(table === 'Multiply'){
      let sum = Mult(number1,number2);
      console.log('The product of ' + number1 + ' + ' + number2 + ' is equal to ' + sum + '. You like to game!');
    }else if(table === 'Divide'){
      let sum = Div(number1,number2);
      console.log('The quotient of ' + number1 + ' + ' + number2 + ' is equal to ' + sum + '. You could always buy more games!');
    }else if(table === 'Add'){
      let sum = Add(number1,number2);
      console.log('The sum of ' + number1 + ' + ' + number2 + ' is equal to ' + sum + '. Keep playing!');
    }else if(table === 'Subtract'){
      let sum = Sub(number1,number2);
      console.log('The difference of ' + number1 + ' + ' + number2 + ' is equal to ' + sum + '. Do you play enough?');
    }
    else{
      console.log('Try again');
    }
    
    }
    
    function Add(a,b){
      return a+b;
    }
    
    function Sub(a,b){
      return a-b;
    }
    
    function Div(a,b){
      return a/b;
    }
    
    function Mult(a,b){
      return a*b;
    }
    
    numberbox();