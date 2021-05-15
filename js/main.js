function changeFunction() {
  var image = document.getElementById("menu_button");
  if (image.src.match("icon-hamburger")) {
    image.src = "images/icon-close.svg";
  } else {
    image.src = "images/icon-hamburger.svg";
  }
}
