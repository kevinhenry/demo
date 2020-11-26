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
    


    function burgerpictures(){
        let burger='';
        let answer = prompt('What star rating would you give burgers, 1-5?');
        // Try adding logic that makes sure they are putting in 1-5
        // and make sure they are putting in a real number
        // make your for loop go up to the number that they put in within the range of 1-5
        
        for(let i=1;i <= 5;i++){
         burger = burger + '<li> <img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg"></li>';
    
        }
        return burger;
    }
    
    //let image = '<img src="https://d1zj8ir38bm4sy.cloudfront.net/wp-content/uploads/2019/10/950x850-akaushi-burger.jpg">';
    
    //function fiveStar(){
    //    for(let i=1; i <= 5; i++){
    //image + i;
    //    }
    //}