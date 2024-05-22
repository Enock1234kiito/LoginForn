
let card = document.getElementById("card");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");

btn1.addEventListener("click",function(){
    card.style.transform = "rotateY(-180deg)"
})

btn2.addEventListener("click",function(){
    card.style.transform = "rotateY(0deg)"
})