particlesJS.load('particles-js', './particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

  var canvasElement = undefined
  const topDiv = document.querySelector('.top')

  setTimeout(() => {
   canvasElement = document.querySelector('.particles-js-canvas-el')
   console.log(topDiv.offsetHeight);
   canvasElement.style.height = topDiv.offsetHeight+"px"
  }, 55);

  const setDims = () => {
    canvasElement.style.height = topDiv.offsetHeight+"px"
  }

  window.addEventListener('resize', setDims)