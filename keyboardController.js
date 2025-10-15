// /////////////////////////////////////////////////////////////////////
// ////////// Keyboard Controls      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

// ///////// Synthesizer setup

let polySynth = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: "fatsawtooth",
    count: 3,
    spread: 10,
  },
  envelope: {
    attack: 0.01,
    decay: 0.1,
    sustain: 0.5,
    release: 0.1,
    attackCurve: "exponential",
  },
});

/////////////////////////////////////////////////////////////////////
////////// Distortion Controls    ////////////////////////////////////
////////////////////////////////////////////////////////////////////
const distortion = new Tone.Distortion(1);
distortion.wet.value = 0; 


var dslider = document.getElementById("distortionRange");

dslider.addEventListener("mousemove", function(){
    var y = dslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (y * 10) + '%, #DDDDDD ' + (y * 10) + '%)';
    dslider.style.background = colour;
    var distortionwet = dslider.value;

    distortion.wet.value = distortionwet / 10;
    console.log(distortionwet);
})

/////////////////////////////////////////////////////////////////////
////////// Reverb Controls    ////////////////////////////////////
////////////////////////////////////////////////////////////////////
const reverb = new Tone.Reverb(1);
reverb.wet.value = 0; 


var rslider = document.getElementById("reverbRange");

rslider.addEventListener("mousemove", function(){
    var x = rslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (x * 10) + '%, #DDDDDD ' + (x * 10) + '%)';
    rslider.style.background = colour;
    var reverbwet = rslider.value;

    reverb.wet.value = reverbwet / 10;
    console.log(reverbwet);
})



/////////////////////////////////////////////////////////////////////
////////// Bass Controls      ////////////////////////////////////
////////////////////////////////////////////////////////////////////
const EQ3 = new Tone.EQ3(0,0,0);



var bslider = document.getElementById("bassRange");

bslider.addEventListener("mousemove", function(){
    var w = bslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (w * 10) + '%, #DDDDDD ' + (w * 10) + '%)';
    bslider.style.background = colour;
    var basswet = bslider.value;

   EQ3.set({low: basswet * 10}); 
    console.log(basswet);
})



///////////////////////////////////////////////////////////////////////
//////////// Randomness Controls      ////////////////////////////////////
//////////////////////////////////////////////////////////////////////

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
    var distortionwet = dslider.value;

    distortion.wet.value = distortionwet / 10;
    console.log(distortionwet);


    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    rslider.value = randomNum;
    var x = rslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (x * 10) + '%, #DDDDDD ' + (x * 10) + '%)';
    rslider.style.background = colour;
    var reverbwet = rslider.value;

    reverb.wet.value = reverbwet / 10;
    console.log(reverb);


    randomNum = Math.floor(Math.random() * max);
    console.log(randomNum);
    bslider.value = randomNum;
    var w = bslider.value;
    var colour = 'linear-gradient(90deg, #5e81db ' + (w * 10) + '%, #DDDDDD ' + (w * 10) + '%)';
    bslider.style.background = colour;
    var basswet = bslider.value;

    EQ3.set({low: basswet * 10}); 
    console.log(basswet);
})


//////////////////////////////////
//// Volume ///////
/////////////////////////////////
let vslider = document.getElementById("volumeRange");

vslider.addEventListener("mousemove", function(){
    var w = parseInt(vslider.value) + 10;
    console.log(w);
    var colour = 'linear-gradient(90deg, #5e81db ' + (w * 10) + '%, #DDDDDD ' + (w * 10) + '%)';
    vslider.style.background = colour;
    var volumeset = vslider.value;

   polySynth.volume.value = volumeset;
   bellPlayer.volume.value = volumeset;
   cymbalPlayer.volume.value = volumeset;
   drumPlayer.volume.value = volumeset;
   metronomePlayer.volume.value = volumeset;
   demoPlayer.volume.value = volumeset;
    //console.log(volumeset);
})


//FILL IN - LAST THING TO GET WORKING //


// ///////// Intro Modal popup
let introModal = document.getElementById("introDialog");
document.getElementById("introDialog").showModal();
document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});
introModal.addEventListener("close", toneInit);

let allKeys = Array.from(document.getElementsByClassName("whiteKey")).concat(
  Array.from(document.getElementsByClassName("blackKey"))
);


let keyPressed = false;

window.addEventListener("mousedown", () => {
  keyPressed = true;
});

window.addEventListener("mouseup", () => {
  keyPressed = false;
});

allKeys.forEach(key => {
    key.addEventListener("mousedown", e => {
        let note = e.target.dataset.note;
        let octave = e.target.parentElement.parentElement.dataset.octave;
        polySynth.triggerAttack(note + octave, '8n');
    });
    key.addEventListener("mouseup", e => {
      let note = e.target.dataset.note;
      let octave = e.target.parentElement.parentElement.dataset.octave;
      polySynth.triggerRelease(note + octave, '8n');

    });
    key.addEventListener("mouseenter", e => {
        if (keyPressed === false) {
          return;
        }
        let note = e.target.dataset.note;
        polySynth.triggerAttackRelease(note + octave, '8n');
    });

  });

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////// Tone Desitination    /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function toneInit() {
  Tone.start();
  polySynth.chain(reverb, EQ3, distortion, Tone.Destination);
}
