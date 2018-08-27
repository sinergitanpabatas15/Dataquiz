(() => {
  var toggle = false;
    
  function expandGrid(e) {
    e.preventDefault();
    toggle = !toggle;
    if(toggle) {
      //document.querySelector('.c-checkout').style.display = "block";
      document.querySelector('.c-checkout').classList.add('active');
      document.querySelector('.c-checkout').classList.remove('deactive');
      document.querySelector('.c-checkout').setAttribute('aria-hidden', false);
  
      document.querySelector('.active').addEventListener('animationend', e => e.target.style.zIndex = '1');
      
    } else {
      //document.querySelector('.c-checkout').style.display = "none";
      document.querySelector('.c-checkout').style.zIndex = null;
      document.querySelector('.c-checkout').classList.remove('active');
      document.querySelector('.c-checkout').classList.add('deactive');
      document.querySelector('.c-checkout').setAttribute('aria-hidden', true);
    }
  }
  
  document.querySelector('.c-checkout--submit').addEventListener('click', e => e.preventDefault());
  
  document.querySelector('.c-product--cart').addEventListener('click',expandGrid);
  
  })()