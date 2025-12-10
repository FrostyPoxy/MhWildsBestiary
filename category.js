function myFunction() {
  var x = document.getElementById("side-bar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

// function allMonsters() {
//   let amphibians = document.getElementById("amphibian");
//   let birdWyvern = document.getElementById("bird-wyvern");
//   let bruteWyvern = document.getElementById("brute-wyvern");
//   let cephalopod = document.getElementById("cephalopod");
//   let construct = document.getElementById("construct");
//   let demiElder = document.getElementById("demi-elder");
//   let fangedBeast = document.getElementById("fanged-beast");
//   let flyingWyvern = document.getElementById("flying-wyvern");
//   let leviathan = document.getElementById("leviathan");
//   let temnocerant = document.getElementById("temnocerant");
  
//   if (.style.display === "block") {
//     return false;
//   }
//   else {
//     bO.className += " current";
//     bW.classList.remove("current");
//     bM.classList.remove("current");
//     bD.classList.remove("current");
//     w.style.display = "none";
//     o.style.display = "block";
//     m.style.display = "none";
//     d.style.display = "none";
//   }
// }