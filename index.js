const button = document.querySelector("button");
button.addEventListener("click", () =>{
    window.location.reload();
});
var random1= ((Math.floor(6*Math.random()))+1);
var random2= ((Math.floor(6*Math.random()))+1);
document.querySelector("img.img1").setAttribute("src", "./images/side_"+random1+"_pips.png");
document.querySelector("img.img2").setAttribute("src", "./images/side_"+random2+"_pips.png");
if(random1 === random2){
document.querySelector("h1").innerHTML=("Its's a draw :):");
}
else if(random1 > random2){
    document.querySelector("h1").innerHTML=("Player 1 wins✨");
}
else{
    document.querySelector("h1").innerHTML=("Player 2 wins✨");
}