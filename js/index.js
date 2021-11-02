$(".begin-btn").click(function () {
  $(".wrap").css("transform", "translateX(-100vw)");
});

var description = document.querySelector('.wrap_description');

var manager = new Hammer.manager(description);

var Swipe = new Hammer.Swipe();

manager.add(Swipe);

manager.on('swipe', function(e) {
  // umm...
});