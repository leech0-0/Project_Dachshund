// /////////////////////////////////////////////////////////////////////
// ////////// Collar Controls  - Bell    ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const bellPlayer = new Tone.Player("./Assets/bell.mp3").toDestination();//fix todestination later

let bellButton = document.getElementById("bellButton");

bellButton.addEventListener("click", () => {
    bellPlayer.start();

})

// /////////////////////////////////////////////////////////////////////
// ////////// Collar Controls - Cymbal      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const cymbalPlayer = new Tone.Player("./Assets/cymbal.mp3").toDestination();//fix todestination later

let cymbalButton = document.getElementById("cymbalButton");

cymbalButton.addEventListener("click", () => {
    cymbalPlayer.start();

})

// /////////////////////////////////////////////////////////////////////
// ////////// Collar Controls - Drum      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const drumPlayer = new Tone.Player("./Assets/drum.mp3").toDestination();//fix todestination later

let drumButton = document.getElementById("drumButton");

drumButton.addEventListener("click", () => {
    drumPlayer.start();

})

// /////////////////////////////////////////////////////////////////////
// ////////// Collar Controls - Metronome     ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

const metronomePlayer = new Tone.Player("./Assets/metronome.mp3").toDestination();//fix todestination later

let metronomeButton = document.getElementById("metronomeButton");

metronomeButton.addEventListener("click", () => {
    metronomePlayer.start();

})

// /////////////////////////////////////////////////////////////////////
// ////////// Play and Pause Controls      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

//play 

const demoPlayer = new Tone.Player("./Assets/playdemo.mp3").toDestination();//fix todestination later

let playButton = document.getElementById("demoPlayButton");

playButton.addEventListener("click", () => {
    demoPlayer.start();

})

//pause
let pauseButton = document.getElementById("demoPauseButton");

pauseButton.addEventListener("click", () => {
    demoPlayer.stop();
})