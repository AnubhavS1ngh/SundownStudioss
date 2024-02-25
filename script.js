function loco(){
  const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
}

function page4animation(){
  var elemC = document.querySelector("#elem-container")
  var fixed = document.querySelector("#fixed-img")
  elemC.addEventListener("mouseenter", function(){
    fixed.style.display= "block"
  })

  var fixed = document.querySelector("#fixed-img")
  elemC.addEventListener("mouseleave", function(){
    fixed.style.display= "none"
  })

  // var elem1 = document.querySelector(".elem1");
  // elem1.addEventListener("mouseenter",function(){
  //   var image = elem1.getAttribute("data-image")
  //   fixed.style.backgroundImage = `url(${image})`;
  // })
  var elems = document.querySelectorAll(".elem")
  elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
    var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    })
  })

}

function swiperanimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 100,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });  
}

function loader(){
  var loader = document.querySelector("#loader")
  setTimeout(function(){
    loader.style.top = "-100%"
  },4500)
}
loader();
swiperanimation();
page4animation();
loco();
