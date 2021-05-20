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

// kostyl try to fix later
function productShowMenu() {
  var showMenu = document.getElementById("productDropDown");
  if (showMenu.className === "dropdown") {
    showMenu.className += " showMenu"
  } else {
    showMenu.className = "dropdown"
  }
}

function companyShowMenu() {
  var showMenu2 = document.getElementById("companyDropDown");
  if (showMenu2.className === "dropdown") {
    showMenu2.className += " showMenu"
  } else {
    showMenu2.className = "dropdown"
  }
}

function connectShowMenu() {
  var showMenu3 = document.getElementById("connectDropDown");
  if (showMenu3.className === "dropdown") {
    showMenu3.className += " showMenu"
  } else {
    showMenu3.className = "dropdown"
  }
}
