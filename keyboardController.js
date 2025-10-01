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
function toneInit() {
  polySynth.toDestination();
}

// ///////// Intro Modal popup
// /* find modal */
let introModal = document.getElementById("introDialog");
document.getElementById("introDialog").showModal();
document.getElementById("dialogCloseButton").addEventListener("click", () => {
  introModal.close();
});
introModal.addEventListener("close", toneInit);

// /* find keys by their class and add to array */
let allKeys = Array.from(document.getElementsByClassName("whiteKey")).concat(
  Array.from(document.getElementsByClassName("blackKey"))
);

// /* set default octave : we will update based on keys later on */
let octave = 3;

// /* add an event listener to each key */

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
        polySynth.triggerAttack(note + octave, '8n');
    });
    key.addEventListener("mouseup", e => {
      let note = e.target.dataset.note;
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