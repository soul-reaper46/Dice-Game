var randomNumber1 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img1").setAttribute("src", "assets/dice"+randomNumber1+".png");

var randomNumber2 = Math.floor(Math.random() * 6)+1;
document.querySelector(".img2").setAttribute("src", "assets/dice"+randomNumber2+".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player2 Wins!";
}
else {
  document.querySelector("h1").innerText = "Draw!";
}
