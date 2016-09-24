import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {

    let navTrigger = document.querySelector(".menu-btn");
    let navTriggerButton = document.querySelector(".menu-btn .button");
    let overlay = document.querySelector(".overlay");

    let toggleMenu = () => {
      navTriggerButton.classList.toggle('open');
      overlay.classList.toggle('active');
    };

    navTrigger.addEventListener('click', toggleMenu, false);
    overlay.addEventListener('click', () => {
      navTrigger.click();
    });

    // Add a listener to hide the menu when the user clicks on one the links
    let links = document.querySelectorAll(".navigation a");
    Array.prototype.forEach.call(links, (link) => {
      link.addEventListener('click', () => {
        navTrigger.click();
      });
    });
  }
});
