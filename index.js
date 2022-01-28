let laughing = document.getElementById("laughing");
let hardWorking = document.getElementById("hardWorking");
let long = document.getElementById("long");
let sleepy = document.getElementById("sleepy");

laughing.style.display = "none";
long.style.display = "none";
sleepy.style.display = "none";
hardWorking.style.display = "none";

let laughingButton = document.getElementById("laughingButton");
let hardWorkingButton = document.getElementById("hardWorkingButton");
let longButton = document.getElementById("longButton");
let sleepyButton = document.getElementById("sleepyButton");

laughingButton.addEventListener("click", lReveal);
hardWorkingButton.addEventListener("click", hReveal);
longButton.addEventListener("click", longReveal);
sleepyButton.addEventListener("click", sReveal);

function lReveal() {
  laughing.style.display = "block";
  long.style.display = "none";
  sleepy.style.display = "none";
  hardWorking.style.display = "none";
}
function hReveal() {
  hardWorking.style.display = "block";
  laughing.style.display = "none";
  long.style.display = "none";
  sleepy.style.display = "none";
}
function sReveal() {
  sleepy.style.display = "block";
  laughing.style.display = "none";
  long.style.display = "none";
  hardWorking.style.display = "none";
}
function longReveal() {
  long.style.display = "block";
  laughing.style.display = "none";
  sleepy.style.display = "none";
  hardWorking.style.display = "none";
}
