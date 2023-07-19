var randomNumber1=Math.random() * 6 +1;
randomNumber1=Math.round(randomNumber1);

var randomNumber2=Math.random() * 6 +1;
randomNumber2=Math.round(randomNumber2);

document.querySelectorAll("img")[0].setAttribute("src","./images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src","./images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = " 🚩Player 1 Wins!" 
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩" 
}
else{
    document.querySelector("h1").textContent = "Draw!" 
}