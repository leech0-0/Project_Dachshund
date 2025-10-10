// let randomNum = Math.floor(Math.random() * 11);

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 0;
const max = 11;
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max);
    myLabel.textContent = randomNum;
}