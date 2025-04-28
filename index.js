let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeScoreCount = 0;
let guestScoreCount = 0;

function homeScorePlus1() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
}
function homeScorePlus2() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
}
function homeScorePlus3() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
}
function homeScoreMinus1() {
  homeScoreCount -= 1;
  homeScore.textContent = homeScoreCount;
}
function homeScoreReset() {
  homeScoreCount = 0;
  homeScore.textContent = homeScoreCount;
}

function guestScorePlus1() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
}
function guestScorePlus2() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
}
function guestScorePlus3() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
}
function guestScoreMinus1() {
  guestScoreCount -= 1;
  guestScore.textContent = guestScoreCount;
}
function guestScoreReset() {
  guestScoreCount = 0;
  guestScore.textContent = guestScoreCount;
}