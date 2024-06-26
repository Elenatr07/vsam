     (function () {
  var square = document.querySelector('.services_block');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.consulting');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('block_animation');
      //  return;
      }

    //  entrySquare.classList.remove('block_animation');
    });
  });

  observer.observe(square);
})();
  (function () {
  var square = document.querySelector('.services_block');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entrySquare = entry.target.querySelector('.other_service');
      if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
        return;
      }

      if (entry.isIntersecting) {
        entrySquare.classList.add('block_animation1');
      //  return;
      }

    //  entrySquare.classList.remove('block_animation1');
    });
  });

  observer.observe(square);
})();

document.addEventListener('DOMContentLoaded', function() {
  let blocks = document.querySelectorAll('.block_item');

  function checkBlocksVisibility() {
      let windowHeight = window.innerHeight;

      blocks.forEach(block => {
          let blockPosition = block.getBoundingClientRect().top;
          console.log(blockPosition)
          if (blockPosition < windowHeight - 100) {
              block.style.opacity = "1";
              block.style.transform = "translateY(0)";
          }
      });
  }

  checkBlocksVisibility();

  window.addEventListener('scroll', function() {
      checkBlocksVisibility();
  });


});