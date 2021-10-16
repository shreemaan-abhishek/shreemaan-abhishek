var canvasElement = undefined
const topDiv = document.querySelector('.top')

particlesJS.load('particles-js', './particles.json', function () {
    canvasElement = document.querySelector('.particles-js-canvas-el')
    console.log(topDiv.offsetHeight);
    canvasElement.style.height = topDiv.offsetHeight + "px"
});


const setDims = () => {
    canvasElement.style.height = topDiv.offsetHeight + "px"
}

window.addEventListener('resize', setDims)
