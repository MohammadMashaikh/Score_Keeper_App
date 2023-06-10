
    
let player1 = document.getElementById("p1-points");
let player2 = document.getElementById("p2-points");
let p1btn = document.getElementById("p1-btn");
let p2btn = document.getElementById("p2-btn");
const winnerContainer = document.getElementById("winner");


let p1Score = 0;
let p2Score = 0;
const gameOver = 5;


p1btn.addEventListener('click', function (event){
    addPoint(1);
    if(p1Score >= gameOver){
        endGame();
    }
});

p2btn.addEventListener('click', function (event){
    addPoint(2);
    if(p2Score >= gameOver){
        endGame();
    }
});


document.getElementById("reset").addEventListener("click", function () {
  p1Score = 0;
  p2Score = 0;
  player1.textContent = 0;
  player2.textContent = 0;
  p1btn.disabled = false;
  p2btn.disabled = false;
  document.getElementById("winner").style.display = "none";
  document.getElementsByTagName("body")[0].style.backgroundColor = "#fff";
  // Another way to solve the problem.
  //   location.reload();
});


function addPoint(player) {
    if(player == 1){
        p1Score++;
        if(p2Score > 0){
            p2Score--;
        }
        player1.textContent = p1Score;
        player2.textContent = p2Score;
    }else {
        p2Score++;
        if(p1Score > 0){
            p1Score--;
        }
        player2.textContent = p2Score;
        player1.textContent = p1Score;
    }
}


function endGame () {

 let winnerPlayerName = null;
 
 if(p1Score > p2Score){
    winnerPlayerName = document.getElementById('p1-name').textContent;
 }else {
    winnerPlayerName = document.getElementById('p2-name').textContent;
 }
    document.getElementById('winner-name').textContent = winnerPlayerName;
    winnerContainer.style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    p1btn.disabled = true;
    p2btn.disabled = true;

 let colorSwitch = 0;
  setInterval(function () {

    if (colorSwitch == 0) {
      winnerContainer.style.backgroundColor = 'red';
      // appImage.style.boxShadow = '0px 0px 41px 10px rgba(209,224,23,0.75)';
      colorSwitch++;
    } else {
      winnerContainer.style.backgroundColor = 'yellow';
      // appImage.style.boxShadow = 'none';
      colorSwitch--;
    }
  }, 500);



}
