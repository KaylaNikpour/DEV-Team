// For nav bar + hamburger
function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function resize() {
    let x = document.getElementById("myLinks");
      x.style.display = "flex";
        if (window.outerWidth < 800) {
    x.style.display = "none"; }
        else {x.style.display = "flex"; }
  }
// Copyright
  document.getElementById("year").innerHTML = new Date().getFullYear();