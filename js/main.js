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

// // function showMenu() {
// //   var checkClass = document.getElementsByClassName("dropbtn")[0];
// //   if (checkClass.className === "dropbtn") {
// //     checkClass.className += " show_icon";
// //   } else {
// //     checkClass.className = "dropbtn";
// //   }
//
//   // var x = document.getElementsByClassName("dropdown_content");
//   // if (x.style.display === "none") {
//   //   x.style.display = "block";
//   // } else {
//   //   x.style.display = "none";
//   // }
// $(".dropbtn").click(function(){
//   $( ".dropbtn" ).addClass( " show" )
// });
