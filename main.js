let SixDie;
let ThreeDie;
let SixtyNineDie;

console.log(SixDie);
console.log(ThreeDie);
console.log(SixtyNineDie);

//I want to make a function that when ROll is pressed I print the numbers on the webpage

function rollDie(){
  document.getElementById("roll-button").onclick
  let SixDie = Math.floor(Math.random()*6) + 1; //Generate a random number, multiple it and floor it to be 0-5, add offset of 1 to ensure we're between 1-6
  let ThreeDie = Math.floor(Math.random()*3) + 1;
  let SixtyNineDie = Math.floor(Math.random()*69) + 1; //Nice

}

document.getElementById("roll-button").onclick = function(){
  let SixDie = Math.floor(Math.random()*6) + 1; //Generate a random number, multiple it and floor it to be 0-5, add offset of 1 to ensure we're between 1-6
  let ThreeDie = Math.floor(Math.random()*3) + 1;
  let SixtyNineDie = Math.floor(Math.random()*69) + 1; //Nice

  document.getElementById("xlabel").innerHTML = SixDie;
  document.getElementById("ylabel").innerHTML =ThreeDie;
  document.getElementById("zlabel").innerHTML = SixtyNineDie;


}