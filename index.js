var randomnumber =Math.floor(Math.random()*6)+1;
var randomdiceimg ="dice"+randomnumber +".png";
var randomimagesource ="images/"+randomdiceimg;
var img1 =document.querySelectorAll("img")[0];
img1.setAttribute("src",randomimagesource); 

var randomnumber2 =Math.floor(Math.random()*6)+1;
var randomdiceimg2 ="dice"+randomnumber2 +".png";
var randomimagesource2 ="images/"+randomdiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2); 

if(randomnumber>randomnumber2)
{
    document.querySelector("h2").innerHTML="🚩Yeah Playesr 1 Wins!🚩"; 
}
else if (randomnumber2>randomnumber)
{
    document.querySelector("h2").innerHTML =" 🚩Yeah Playesr 2 Wins!🚩"; 
}
else{
    document.querySelector("h2").innerHTML="Draw 😣🤐"; 
}