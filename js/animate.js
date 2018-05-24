let timer;
const thingToAnimate = document.querySelector('.thingToAnimate');
const scrollTarget = document.querySelector('.scrollTarget');

window.addEventListener('scroll', function(event) {
  // Y coordinate (in pixels) where our scrollTarget sits in the page
  const scrollTargetRect = scrollTarget.getBoundingClientRect()
  const scrollTargetTop = scrollTargetRect.top
  
  // Offset (in pixels) above the scrollTarget element
  const offset = 200

  const distance = window.innerHeight - scrollTargetTop
  console.log(distance - offset)
    
  if (distance <= 0) {
    thingToAnimate.classList.add('hidden')    
  }

  // If we haven't scroll past our element / offset, remove the animation and stop the event handler...
  if (distance - offset <= 0) {
    // Remove the animation
    thingToAnimate.classList.remove('animated', 'fadeInUp')
    return
  }


  if (thingToAnimate.classList.contains('fadeInUp')) {
    return
  }
  
  // If we HAVE scrolled ON or PAST our element / offset, trigger the animation...
  thingToAnimate.classList.remove('hidden')
  thingToAnimate.classList.add('animated', 'fadeInUp')
})