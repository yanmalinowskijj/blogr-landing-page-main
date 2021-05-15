function changeFunction() {
  var image = document.getElementById("menu_button");
  if (image.src.match("icon-hamburger")) {
    image.src = "images/icon-close.svg";
    image.style.marginTop = "60px";
    image.style.marginRight = "27px";
  } else {
    image.src = "images/icon-hamburger.svg";
    image.style.marginTop = "63px";
    image.style.marginRight = "24px";

  }

  var showOrHide = document.getElementById("mobile_menu");
  if (showOrHide.className === "responsive_menu") {
    showOrHide.className += " show";
  } else {
    showOrHide.className = "responsive_menu";
  }
}
