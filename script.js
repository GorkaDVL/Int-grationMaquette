// Animations 

var tl = new TimelineMax(); // 
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tl6 = new TimelineMax();
var tl7 = new TimelineMax();
var tl8 = new TimelineMax();


const controller = new ScrollMagic.Controller();


tl.from("#bannerfig", 2, { opacity: 0, scale: 0 });


tl2.from("#img1", 1.5, { x: -400, opacity: 0 });
tl2.from("#titleeffect", 1, { x: -200, opacity: 0 });
tl2.from("#txteffect", 1, { x: 300, opacity: 0 });
tl2.from("#btn-1", 1.3, { z: 200, opacity: 0 });
tl2.from("#effect1", 1, { y: -300, opacity: 0 })

tl3.from("#img2", 1.5, { x: 400, opacity: 0 })
tl3.from("#titleeffect2", 1, { x: -200, opacity: 0 });
tl3.from("#txteffect2", 1, { x: 200, opacity: 0 });
tl3.from("#btn-2", 1.3, { z: 200, opacity: 0 });

tl4.from("#img3", 1.5, { x: 400, opacity: 0 });
tl4.from("#titleeffect3", 1, { x: -200, opacity: 0 });
tl4.from("#txteffect3", 1, { x: 200, opacity: 0 });
tl4.from("#btn-3", 1.3, { z: 200, opacity: 0 });
tl4.from("#effect2", 1, { y: -300, opacity: 0 })

tl5.from("#img4", 1.5, { x: -400, opacity: 0 });
tl5.from("#titleeffect4", 1, { x: -200, opacity: 0 });
tl5.from("#txteffect4", 1, { x: 300, opacity: 0 });
tl5.from("#btn-4", 1.3, { z: 200, opacity: 0 });

tl6.from("#titleeffect5", 1, { x: -200, opacity: 0 });
tl6.from("#txt5", 1, { z: 200, opacity: 0 });
tl6.from("#btn-5", 1.3, { x: -200, opacity: 0 });

tl7.from("#img6", 1.5, { y: -400, opacity: 0 });
tl7.from("#titleeffect6", 1, { x: -200, opacity: 0 });
tl7.from("#blocktxt7", 1, { x: 300, opacity: 0 });
tl7.from("#btn-6", 1.3, { z: 200, opacity: 0 });
tl7.from("#effect1-1", 1, { y: -300, opacity: 0 })

tl8.from("#titleeffect7", 1, { x: 300, opacity: 0 });
tl8.from("#txteffect7", 1.3, { x: 300, opacity: 0 });
tl8.from("#effect3", 1, { y: -300, opacity: 0 })






const scene = new ScrollMagic.Scene({
  triggerElement: "#header"
})
  .setTween(tl)
  .addTo(controller);


const scene2 = new ScrollMagic.Scene({
  triggerElement: "#img1"
})
  .setTween(tl2)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#btn-1",
})

  .setTween(tl3)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#btn-2",
})

  .setTween(tl4)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#btn-3",
})

  .setTween(tl5)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: "#btn-4",
})

  .setTween(tl6)
  .addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: "#btn-5",
})

  .setTween(tl7)
  .addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: "#btn-6",
})

  .setTween(tl8)
  .addTo(controller);






// Navbar

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("body").style.backgroundColor = "white";
};








