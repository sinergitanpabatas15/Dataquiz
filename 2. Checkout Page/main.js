(() => {
    var toggle = false;
      
    function expandGrid(e) {
      e.preventDefault();
      toggle = !toggle;
      if(toggle) {
        document.querySelector('.c-checkout').style.display = "block";
        document.querySelector('.c-checkout').setAttribute('aria-hidden', false);
      } else {
        document.querySelector('.c-checkout').style.display = "none";
        document.querySelector('.c-checkout').setAttribute('aria-hidden', true);
      }
    }
    
    document.querySelector('.c-checkout--submit').addEventListener('click', e => e.preventDefault());
    
    document.querySelector('.c-product--cart').addEventListener('click',expandGrid);
    
    })()