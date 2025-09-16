// /////////////////////////////////////////////////////////////////////
// ////////// Keyboard Controls      ////////////////////////////////////
// ////////////////////////////////////////////////////////////////////

// ///////// Synthesizer setup

// let polySynth = new Tone.PolySynth(Tone.Synth, {
//   oscillator: {
//     type: "fatsawtooth",
//     count: 3,
//     spread: 10,
//   },
//   envelope: {
//     attack: 0.01,
//     decay: 0.1,
//     sustain: 0.5,
//     release: 0.1,
//     attackCurve: "exponential",
//   },
// });
// /* we don't connect it immediately to our audio driver, we wait for user interaction (via the modal) */
// function toneInit() {
//   polySynth.toDestination();
// }

// ///////// Intro Modal popup
// /* find modal */
// let introModal = document.getElementById("introDialog");
// /* to get the backdrop working we need to open the modal with js */
// document.getElementById("introDialog").showModal();
// /* find modal close button and add an eventlistener */
// document.getElementById("dialogCloseButton").addEventListener("click", () => {
//   introModal.close();
// });
// /* finally we want to initialize the synthesizer when the modal is closed */
// /* because this can be through the above button, or by pressing esc, we tie it to the actual close event */
// /* the referenced toneInit function is defined in toneSetup.js */
// introModal.addEventListener("close", toneInit);

// /* find keys by their class and add to array */
// let allKeys = Array.from(document.getElementsByClassName("whiteKey")).concat(
//   Array.from(document.getElementsByClassName("blackKey"))
// );

// /* set default octave : we will update based on keys later on */
// let octave = 3;

// /* add an event listener to each key */

// let keyPressed = false;

// window.addEventListener("mousedown", () => {
//   keyPressed = true;
// });

// window.addEventListener("mouseup", () => {
//   keyPressed = false;
// });

// allKeys.forEach(key => {
//     key.addEventListener("mousedown", e => {
//         let note = e.target.dataset.note;
//         polySynth.triggerAttack(note + octave, '8n');
//     });
//     key.addEventListener("mouseup", (e) => {
//       let note = e.target.dataset.note;
//       polySynth.triggerRelease(note + octave);

//     });
//     key.addEventListener("mouseenter", e => {
//         if (keyPressed === false) {
//           return;
//         }
//         let note = e.target.dataset.note;
//         polySynth.triggerAttackRelease(note + octave, '8n');
//     });
//     key.addEventListener("mouseleave", (e) => {
//       let note = e.target.dataset.note;
//       polySynth.triggerAttackRelease(note + octave);

//     });
// allKeys.forEach((key) => {
//   key.addEventListener("mousedown", (e) => {
//     let note = e.target.dataset.note;
//     polySynth.triggerAttackRelease(note + octave, "8n");
//   });
// }); });
