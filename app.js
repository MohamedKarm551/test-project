var accord = document.getElementsByClassName("accord");
console.log(accord);
for (var i = 0; i < accord.length; i++) {
  accord[i].addEventListener("click", function () {
    //var element = this.nextElementSibling;
    var element = document.getElementsByClassName("article-Text");
    //console.log(element);
    element.classList.toggle("info-hide"); //errooooooooooor
    //classList.replace("info-hide", "");
  });
}
//

// fixed and scroll
window.onscroll = function scrollFixed() {
  if (window.scrollY >= 500) {
    $(".fixedTop").show();
  } else {
    $(".fixedTop").hide();
  }
  if (window.scrollY >= 100) {
    $(".navbar").css("background-color", "rgba(255, 255, 255, 0.9)");
  } else {
    $(".navbar").css("background-color", "#fff");
  }
};
//
