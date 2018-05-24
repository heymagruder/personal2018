let timer;
const thingToAnimate = document.querySelector('.thingToAnimate');
const scrollTarget = document.querySelector('.scrollTarget');

window.addEventListener('scroll', function(event) {
  // Y coordinate (in pixels) where our scrollTarget sits in the page
  const scrollTargetTop = scrollTarget.offsetTop
  
  // Offset (in pixels) above the scrollTarget element
  const offsetAbove = 100
  
  // See where we're scrolling in the browser console (DevTools)
  console.log(window.pageYOffset, scrollTargetTop)
  
  // If we haven't scroll past our element / offset, remove the animation and stop the event handler...
  if (window.pageYOffset <= scrollTargetTop - offsetAbove) {
    // Remove the animation
    thingToAnimate.classList.remove('animated', 'fadeInUp')
    return
  }
  
  // If we HAVE scrolled ON or PAST our element / offset, trigger the animation...
  thingToAnimate.classList.add('animated', 'fadeInUp')  
})