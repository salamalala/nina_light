function AnimationBackground(){this.controller=new ScrollMagic.Controller({globalSceneOptions:{triggerHook:.5}}),this.scenes=[]}AnimationBackground.prototype={controller:null,scenes:null,constructor:AnimationBackground,createAnimation:function(n,e){var o=new ScrollMagic.Scene(e.scene.options);return o.setClassToggle("#body-wrapper",n),o.addTo(this.controller),o.addIndicators(),this.scenes.push(o),this}};var animationBackground=new AnimationBackground;document.addEventListener("DOMContentLoaded",function(n){animationBackground.createAnimation("body-wrapper__work",{scene:{options:{triggerElement:".work"}}}).createAnimation("body-wrapper__services",{scene:{options:{triggerElement:".services"}}}).createAnimation("body-wrapper__about",{scene:{options:{triggerElement:".about"}}}).createAnimation("body-wrapper__contact",{scene:{options:{triggerElement:".contact"}}})});