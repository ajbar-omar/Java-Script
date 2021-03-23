var myInput = document.getElementById("input"),

 myDiv =document.getElementById("div"),

  myButton=document.getElementById("button");

 myButton.onclick = function(){

     myDiv.innerHTML = myInput.value * 10.70;
 };