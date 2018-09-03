function getForm(e) {
  e.preventDefault();
  let count = 0;
  const input = Array.prototype.slice.call(document.getElementsByTagName('input'));

  input.filter(i => i.id !== 'submit').forEach(function(e) {

    //loop all fields and check if valid, if not, show error tag
    const target = document.getElementById(e.id);

    if(e.id === 'phone' && (target.value.length === 0 || RegExp('^[0-9]*$', 'gm').test(target.value)) || target.validity.valid && target.value !== "" && e.id !== 'phone') {
        target.parentNode.querySelector('.alert-required').classList.remove('invalid');
      count++;
    } else {
        target.parentNode.querySelector('.alert-required').classList.add('invalid');
    }
  })

  //if all validates, send form data to server
  if(count === input.filter(i => i.id !== 'submit').length) {
      document.getElementById('submit').value = 'Submitting...';
      setTimeout(function(){
        document.getElementById('submit').value = 'Send again';
        alert("Thank you!");
      }, 2000);
  }

}

function addTransition (e) {
    if(e.target.value.length === 0) {
      document.querySelector('.label-' + e.target.id).style.transform = '';
      document.querySelector('.label-' + e.target.id).style.fontSize = '';
    } else {  
      document.querySelector('.label-' + e.target.id).style.transform = 'translateY(-15px)';
      document.querySelector('.label-' + e.target.id).style.fontSize = '0.7em';
    }
  }


(function () {
    document.getElementById('submit').addEventListener('click', getForm);
    const input = Array.prototype.slice.call(document.getElementsByTagName('input'));

    input.forEach(function(item) {
      if(item.id !== 'submit') {
        item.addEventListener('keyup', addTransition);
        item.addEventListener('focus', addTransition);
        item.addEventListener('change', addTransition);
        item.addEventListener('blur', addTransition);
        item.addEventListener('mousedown', addTransition);

        const newEvent = new Event('change');
        item.dispatchEvent(newEvent); //dispatch change event for autocomplete values
      }
    })
}());