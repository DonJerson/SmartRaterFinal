document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
  const loginElement = document.getElementById('login');
  const modal1 = document.getElementById('modal1');
  const closeUp = document.getElementById('closeup');

  document.addEventListener('click', function(event) {
    var isClickInside = loginElement.contains(event.target);
    var isClickInsideClose = closeUp.contains(event.target);

    if (isClickInside) {
      modal1.classList.add('is-active');
      console.log("in");
      return
    }
    
    if (isClickInsideClose) {
        modal1.classList.remove('is-active');
        console.log("out");
        return
      }
  });


});

