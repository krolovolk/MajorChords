import "./styles.css";

const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// function chords(root) {
//   const i = notes.indexOf(root);
//   let majorChord = [root, notes[(i+4)%12], notes[(i+7)%12]];
//   let minorChord = [root, notes[(i+3)%12], notes[(i+7)%12]];
//   console.log(majorChord, minorChord);
//   return [majorChord, ' - ', minorChord];
// }
function getMajorChord(root) {
  const i = notes.indexOf(root);
  return [root, notes[(i + 4) % 12], notes[(i + 7) % 12]];
}
let majorChords = [];
function loopChords(root, chords) {
  if (chords.length > 12) return true;
  let curChord = getMajorChord(root);
  chords.push(curChord);
  loopChords(curChord[2], chords);
}
loopChords("C", majorChords);
console.log(majorChords);
const out = majorChords.map((e) => e[0] + ": " + e.join("-"));

document.getElementById("app").innerHTML = out.join("<br>");
