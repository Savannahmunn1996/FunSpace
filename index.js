document.getElementById("btn").addEventListener("click", coolFacts);
document.getElementById("btn").addEventListener("click", clear);
var sec = document.querySelector(".sec");

var fact = "scientists just created the first ever worm hole!";

function coolFacts() {
  sec.innerText = fact;
  console.log("hey");
}
function clear() {
  sec.innerText = "";
}
