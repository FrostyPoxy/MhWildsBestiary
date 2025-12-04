// function myFunction() {
//   var x = document.getElementById("weaknesses");
//   if (x.style.display === "flex") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "flex";
//   }
// }
function overview() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  
  if (o.style.display === "block") {
    return false;
  }
  else {
    w.style.display = "none";
    o.style.display = "block";
    m.style.display = "none";
    d.style.display = "none";
  }
}

function weaknesses() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  
  if (w.style.display === "flex") {
    return false;
  }
  else {
    w.style.display = "flex";
    o.style.display = "none";
    m.style.display = "none";
    d.style.display = "none";
  }
}
function combat() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  
  if (m.style.display === "block") {
    return false;
  }
  else {
    w.style.display = "none";
    o.style.display = "none";
    m.style.display = "block";
    d.style.display = "none";
  }
}

function materials() {
  let w = document.getElementById("weaknesses");
  let o = document.getElementById("overview");
  let m = document.getElementById("moveset");
  let d = document.getElementById("drops");
  
  if (d.style.display === "block") {
    return false;
  }
  else {
    w.style.display = "none";
    o.style.display = "none";
    m.style.display = "none";
    d.style.display = "block";
  }
}