
var n =  Math.floor(Math.random() *6) +1;
var randomimg = "dice" + n + ".png";
var source = "/images/"+randomimg;

document.querySelectorAll("img")[0].setAttribute("src", source);

var m =  Math.floor(Math.random() *6) +1;
var source2 = "/images/dice"+m+".png";
document.querySelectorAll("img")[1].setAttribute("src", source2);

if(n>m){
    document.querySelector("h1").innerHTML = "player 1 wins!";
}
else if(m>n) {
    document.querySelector("h1").innerHTML = "player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "match draw";
}