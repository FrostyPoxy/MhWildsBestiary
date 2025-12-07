function myFunction() {
  var x = document.getElementById("side-bar");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}