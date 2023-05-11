
 function rollDice(){
  var n = Math.floor(Math.random()*6)+1;

  var img1 = "images/dice"+n+".png";

  document.querySelectorAll("img")[0].setAttribute("src", img1);

  var m = Math.floor(Math.random()*6)+1;

  var img2 = "images/dice"+m+".png";

  document.querySelectorAll("img")[1].setAttribute("src", img2);

  if(n>m){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}

  else if(m>n){
    document.querySelector("h1").innerHTML = "Player 2 wins";
  }

  else{
    document.querySelector("h1").innerHTML = "Tied";
  }

  }
