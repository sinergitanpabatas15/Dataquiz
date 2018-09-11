function scroll(element) {
  let start = null;
  const target = element && element? element.getBoundingClientRect().top : 0;
  const firstPos = window.pageYOffset || document.documentElement.scrollTop;
  let pos = 0;

  (function() {
    
    var browser = ['ms', 'moz', 'webkit', 'o'];
    
    for(let x = 0, length = browser.length; x < length && !window.requestAnimationFrame; x++) {
      window.requestAnimationFrame = window[browser[x]+'RequestAnimationFrame'];
      window.cancelAnimationFrame = window[browser[x]+'CancelAnimationFrame'] 
      || window[browser[x]+'CancelRequestAnimationFrame'];
    }
    
  }());
  
  function showAnimation (timestamp) {

    if(!start) { start = timestamp || new Date().getTime(); } //get id of animation
    
    let elapsed = timestamp - start;
    let progress = elapsed / 600; // animation duration 600ms
    
    //ease in function from https://github.com/component/ease/blob/master/index.js
    const outQuad = function(n){
      return n * (2 - n);
    };
    
    let easeInPercentage = +(outQuad(progress)).toFixed(2);

    // if target is 0 (back to top), the position is: current pos + (current pos * percentage of duration)
    // if target > 0 (not back to top), the positon is current pos + (target pos * percentage of duration)
    pos = (target === 0)? (firstPos - (firstPos * easeInPercentage)) : (firstPos + (target * easeInPercentage));
    
    window.scrollTo(0, pos);
    console.log(pos, target, firstPos, progress);
    
    if(target !== 0 && pos >= (firstPos + target) || target === 0 && pos <= 0) {
      cancelAnimationFrame(start);
      if(element) { element.focus(); }
      pos = 0;
    } else {
      window.requestAnimationFrame(showAnimation);
    }
    
  }
  window.requestAnimationFrame(showAnimation);
  
}

window.addEventListener("load", function() {
  // use slice for supporting IE 11
  Array.prototype.slice.call(document.querySelectorAll('.menu-item')).forEach(item => {
    const target = item.getAttribute('data-id');
    
    item.addEventListener('click', e => {
      e.preventDefault();
      scroll(document.getElementById(target));
    });
    
  })

  document.getElementById('back').addEventListener('click', e => {
    e.preventDefault();
    scroll();
  });
});
