
window.onscroll = function() {myFunction()};
document.getElementById("brand").classList.add("brand-wide");
// document.getElementById("navbar-top").classList.add("navbar-height");
function myFunction() {
  var elem = document.documentElement;
  var x = (elem.scrollTop/1000)+1;
  // document.getElementById("bg").style.transform = 'scale('+x+','+x+')';
  if (x > 1) {
    document.getElementById("scroll").classList.add("et-visible");
    document.getElementById("scroll").classList.remove("et-hidden");
    // document.getElementById("navbar-top").classList.remove("navbar-height");
    document.getElementById("brand").classList.remove("brand-wide");
    document.getElementById("brand").classList.add("brand-logo");
  } else {
    document.getElementById("scroll").classList.remove("et-visible");
    document.getElementById("scroll").classList.add("et-hidden");
    // document.getElementById("navbar-top").classList.add("navbar-height");
    document.getElementById("brand").classList.remove("brand-logo");
    document.getElementById("brand").classList.add("brand-wide");
  }
}
