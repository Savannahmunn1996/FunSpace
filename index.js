document.getElementById("btn").addEventListener("click", coolFacts);
var sec = document.querySelector(".sec");
function coolFacts() {
  var fact = "scientists just created the first ever worm hole!";

  sec.innertext = fact;
  console.log("hey");
  return fact;
}
