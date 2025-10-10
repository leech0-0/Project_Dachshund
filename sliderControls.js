/////////////////////////////////////////////////////////////////////
////////// Volume Controls      ////////////////////////////////////
////////////////////////////////////////////////////////////////////
var vslider = document.getElementById("volumeRange");

vslider.addEventListener("click", function(){
    var z = vslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (z * 10) + '%, #DDDDDD ' + (z * 10) + '%)';
    vslider.style.background = colour;
})




/////////////////////////////////////////////////////////////////////
////////// Bass Controls      ////////////////////////////////////
////////////////////////////////////////////////////////////////////
var bslider = document.getElementById("bassRange");

bslider.addEventListener("mousemove", function(){
    var w = bslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (w * 10) + '%, #DDDDDD ' + (w * 10) + '%)';
    bslider.style.background = colour;
})


/////////////////////////////////////////////////////////////////////
////////// Reverb Controls      ////////////////////////////////////
////////////////////////////////////////////////////////////////////
var rslider = document.getElementById("reverbRange");

rslider.addEventListener("mousemove", function(){
    var x = rslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (x * 10) + '%, #DDDDDD ' + (x * 10) + '%)';
    rslider.style.background = colour;
})


/////////////////////////////////////////////////////////////////////
////////// Distortion Controls      /////////////////////////////////
////////////////////////////////////////////////////////////////////
var dslider = document.getElementById("distortionRange");

dslider.addEventListener("mousemove", function(){
    var y = dslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (y * 10) + '%, #DDDDDD ' + (y * 10) + '%)';
    dslider.style.background = colour;
})

// /////////////////////////////////////////////////////////////////////
// ////////// Randomness Controls      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const random = document.getElementById("randomiseButton");
const myLabel = document.getElementById("myLabel");
const min = 0;
const max = 11;
let randomNum;

random.addEventListener("click", function(){
    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    dslider.value = randomNum;
    var y = dslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (y * 10) + '%, #DDDDDD ' + (y * 10) + '%)';
    dslider.style.background = colour;



    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    vslider.value = randomNum;
    var z = vslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (z * 10) + '%, #DDDDDD ' + (z * 10) + '%)';
    vslider.style.background = colour;


    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    rslider.value = randomNum;
    var x = rslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (x * 10) + '%, #DDDDDD ' + (x * 10) + '%)';
    rslider.style.background = colour;


    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    bslider.value = randomNum;
    var w = bslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (w * 10) + '%, #DDDDDD ' + (w * 10) + '%)';
    bslider.style.background = colour;
})