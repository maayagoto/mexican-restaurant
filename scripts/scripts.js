//Show/Hide hamburger menu script
const body=document.body;
const btnMenu=document.querySelector('.hamburger');

btnMenu.addEventListener('click',function(e){
   e.preventDefault();
   body.classList.toggle('show');
});

//Show/Hide menu section script
//fade-in fade-out effect to be added
document.getElementById("taco-title").addEventListener("click", toggleTacos);
document.getElementById("starter-title").addEventListener("click", toggleStarters);
document.getElementById("vegan-title").addEventListener("click", toggleVegans);
document.getElementById("burrito-title").addEventListener("click", toggleBurritos);

function toggleTacos(){
   document.getElementById("taco-section").style.display = "flex";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "none";
}
function toggleStarters(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "flex";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "none";
}
function toggleVegans(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "flex";
   document.getElementById("burrito-section").style.display = "none";
}
function toggleBurritos(){
   document.getElementById("taco-section").style.display = "none";
   document.getElementById("starter-section").style.display = "none";
   document.getElementById("vegan-section").style.display = "none";
   document.getElementById("burrito-section").style.display = "flex";
}

document.getElementById("starter-title").click();