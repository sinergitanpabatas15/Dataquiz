function expandMenu(e) {

  e.preventDefault();
  const currentStatus = document.querySelector('.menu').getAttribute('aria-hidden');

  if (currentStatus === 'true') {
    //show menu
    document.body.style.overflow = 'hidden';
    document.querySelector('.menu__wrapper').classList.remove('none');
    document.querySelector('.menu-icon').classList.add('clicked');
    document.querySelector('.menu__wrapper').classList.add('show');
    document.querySelector('.menu__wrapper').classList.remove('hidden');

    //accessibility labels
    document.getElementById('menu').setAttribute('aria-hidden', 'false');
    document.querySelector('.menu').setAttribute('aria-label', 'Close Menu');

  } else {
    //close menu
    document.querySelector('.menu-icon').classList.remove('clicked');
    document.querySelector('.menu__wrapper').classList.remove('show');
    document.querySelector('.menu__wrapper').classList.add('hidden');

    //accessibility labels
    document.getElementById('menu').setAttribute('aria-hidden', 'true');
    document.querySelector('.menu').setAttribute('aria-label', 'Open Menu');
  }

}


document.getElementById('menu').addEventListener('click', expandMenu);