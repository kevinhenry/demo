function gamepictures(){
    let gamepic='';
    let answer = prompt('What joystick rating would you give these pictures, 1-5');
    // try adding logic that makes sure they are putting in 1-5
    // and make sure they are putting in a real number
    // make your for loop gp up to the number that they put in within the range of 1-5
    for(let i=1;i < 3;i++){
        gamepic = gamepic + '<li <img src="https://www.xxxxx.xxx/aaaa.jpg"></li>'
    }
    return gamepic;
}