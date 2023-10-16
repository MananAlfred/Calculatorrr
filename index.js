let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursorBlur");
document.addEventListener("mousemove",function(dets){
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y  + "px";

  // aadhi height minus kri qki top left k hisaab se chal rha tha pehle...
  cursorBlur.style.left = dets.x - 200 + "px";
  cursorBlur.style.top = dets.y - 200 + "px";

});

let navAllH4 = document.querySelectorAll("#nav h4");
navAllH4.forEach(function(element){
  element.addEventListener("mouseenter",function(){
    cursor.style.scale = 3;
    cursor.style.border = "0.5px solid #fff";
    cursor.style.backgroundColor = "transparent";

  });
  element.addEventListener("mouseleave",function(){
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";

  });
});

gsap.to("#nav",{
  backgroundColor : "black",
  duration:0.5,
  height:"80",
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
    start:"top -5%",
    end:"top -8%",
    scrub:1 
  }
});

gsap.to("#main",{
  backgroundColor : "black",
  scrollTrigger:{
    trigger: "#main",
    scroller: "body",
    start:"top -30%",
    end: "top -50%",
    scrub:2,
    // markers: true
  }
});

gsap.from("#about img, #about-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:"#about",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 58%",
    scrub:3
  }
});

gsap.from("#colon1",{
  y:-70,
  x:-70,
  duration:1,
  // stagger:0.1,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
});

gsap.from("#colon2",{
  y:70,
  x:70,
  duration:1,
  // stagger:0.1,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
  }
});

gsap.from("#page4 h1",{
  y:100,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    // markers:true,
    start:"top 80%",
    end:"top 80%",
    scrub:3
  }
});