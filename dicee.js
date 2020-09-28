//jshint esversion:6

document.querySelector(".btn").addEventListener("click" , function(){

  var randomno1=Math.floor(6*Math.random())+1;
  var randomno2=Math.floor(6*Math.random())+1;

  animatePress();
  showResult(randomno1,randomno2);
});

function showResult(randomno1,randomno2){
  if(randomno1===1)
  document.querySelector(".img1").setAttribute("src","images/dice1.png");
  else if(randomno1===2)
  document.querySelector(".img1").setAttribute("src","images/dice2.png");
  else if(randomno1===3)
  document.querySelector(".img1").setAttribute("src","images/dice3.png");
  else if(randomno1===4)
  document.querySelector(".img1").setAttribute("src","images/dice4.png");
  else if(randomno1===5)
  document.querySelector(".img1").setAttribute("src","images/dice5.png");
  else if(randomno1===6)
  document.querySelector(".img1").setAttribute("src","images/dice6.png");

  if(randomno2===1)
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
  else if(randomno2===2)
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
  else if(randomno2===3)
  document.querySelector(".img2").setAttribute("src","images/dice3.png");
  else if(randomno2===4)
  document.querySelector(".img2").setAttribute("src","images/dice4.png");
  else if(randomno2===5)
  document.querySelector(".img2").setAttribute("src","images/dice5.png");
  else if(randomno2===6)
  document.querySelector(".img2").setAttribute("src","images/dice6.png");

  if(randomno1>randomno2)
  document.querySelector("h1").textContent="Player1 wins";
  else if(randomno1<randomno2)
  document.querySelector("h1").innerHTML="<strong>Player2 wins</strong>";
  else
  document.querySelector("h1").textContent="Draw";
}

function animatePress(){
  var x = document.querySelector(".btn");
  x.classList.add("pressed");
  setTimeout(function(){
    x.classList.remove("pressed");
  },100);
}
