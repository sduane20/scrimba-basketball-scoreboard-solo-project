let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("awayScore");
//console.log(homeScore);
//console.log(awayScore);

let homePoints = 0;
let awayPoints = 0;

function homePointsPlus() {
    homePoints = homePoints + 1;
    homeScore.innerText = homePoints;
}

function homePointsPlusTwo() {
    homePoints = homePoints + 2;
    homeScore.innerText = homePoints;
}

function homePointsPlusThree() {
    homePoints = homePoints + 3;
    homeScore.innerText = homePoints;
}

function awayPointsPlus(){
    awayPoints = awayPoints + 1;
    awayScore.innerText = awayPoints;
}

function awayPointsPlusTwo(){
    awayPoints = awayPoints + 2;
    awayScore.innerText = awayPoints;
}

function awayPointsPlusThree(){
    awayPoints = awayPoints + 3;
    awayScore.innerText = awayPoints;
}

function resetHome() {
    homePoints = 0;
    homeScore.innerText = homePoints;
    
}

function resetAway() {
    awayPoints = 0;
    awayScore.innerText = awayPoints;
}

