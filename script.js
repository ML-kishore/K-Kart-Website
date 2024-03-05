var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 1200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


var sidebar = document.getElementsByClassName('sidebar');
var menubar = document.getElementsById('menubar');
sidebar.style.width = '0px';
menubar.onclick = function(){
  if(sidebar.style.width == "0px"){
    sidebar.style.width = "250px";
  }
  else{
    sidebar.style.width = "0px";
  }
}