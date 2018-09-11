function scroll(e) {
  e.scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollToTop() {
  const element = document.body;
  element.scrollIntoView({behavior: "smooth", block: "start"});
}

window.addEventListener("load", function() {
  //use slice for ie11
  Array.prototype.slice.call(document.querySelectorAll('.menu-item')).forEach(item => {
    const target = item.getAttribute('data-id');
    
    item.addEventListener('click', e => {
      e.preventDefault();
      scroll(document.getElementById(target));
    });
    
  })
});

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
    scrollToTop();
  });
});
