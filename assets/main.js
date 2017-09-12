var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 0.5}});

// build scenes
new ScrollMagic.Scene({triggerElement: ".section-work"})
  .setClassToggle("#body-wrapper", "active-section-work")
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-services"})
  .setClassToggle("#body-wrapper", "active-section-services")
  .addIndicators()
  .addTo(controller);
new ScrollMagic.Scene({triggerElement: ".section-about"})
  .setClassToggle("#body-wrapper", "active-section-about")
  .addIndicators()
  .addTo(controller);

new ScrollMagic.Scene({triggerElement: ".section-contact"})
  .setClassToggle("#body-wrapper", "active-section-contact")
  .addIndicators()
  .addTo(controller);
