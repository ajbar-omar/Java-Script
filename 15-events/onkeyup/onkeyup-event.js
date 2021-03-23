var myInput = document.getElementById("input"),

 myDiv =document.getElementById("div");


 myInput.onkeyup = function(){

     myDiv.innerHTML = myInput.value * 10.70;
 };