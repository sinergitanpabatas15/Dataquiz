(() => {

  let timer; //timer for requestAnimationFrame in debounce func
  let length = 0; //text length for message field

  const inputList = Array.prototype.slice.call(document.getElementsByTagName('input')).filter(item => item.type !== 'submit' && item.type !== 'checkbox');
  const input = inputList.concat(Array.prototype.slice.call(document.getElementsByTagName('textarea')));


  //valid each item and set error message
  function isValid(input) {
    const target = input.id ? input.id : input.target.id;
    const valid = document.getElementById(target).validity.valid;
    if (valid) {
      document.getElementById(`${target}-error`).classList.remove('invalid');
      document.getElementById(target).setAttribute('aria-invalid', 'false');
    } else {
      document.getElementById(`${target}-error`).classList.add('invalid');
      document.getElementById(target).setAttribute('aria-invalid', 'true');
      console.log(document.getElementById(target));
    }

    if (document.getElementById('form-message').value.length !== length) {
      length = document.getElementById('form-message').value.length;
      document.getElementById('form-message-length').innerText = length;
    }

    return valid;
  }

  //valid all items and return all are valid or not
  function validAll(arr) {
    let count = 0;
    console.log(typeof arr);
    if (typeof arr !== 'object') {
      return isValid(arr);
    } else {
      arr.forEach(function (ele) {
        if (isValid(ele)) {
          count++;
        }
      });
    }

    return count === arr.length;
  }

  function formSubmit(e) {
    e.preventDefault();

    if (validAll(input)) {
      console.log('valid');
      document.getElementById('form-submit-error').classList.remove('invalid');

      //show thank you message after submission
      document.getElementById('form').classList.add('u-hide');
      document.getElementById('form-thankyou').classList.remove('u-hide');
    } else {
      console.log('invalid');
      document.getElementById('form-submit-error').classList.add('invalid');
    }

  }

  //debounce func using RAF
  function debounce(e = null, func) {
    const raf = requestAnimationFrame || mozRequestAnimationFrame ||
      webkitRequestAnimationFrame || msRequestAnimationFrame;

    const caf = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

    if (timer) {
      timer = caf(timer);
    }

    timer = raf(function (timestamp) {
      func(e);
      return timestamp;
    })

  }

  (() => {
    //custom event polyfill for checking autocomplete / prefill input in IE11 from MDN
    (function () {

      if (typeof window.CustomEvent === "function") return false;

      function CustomEvent(event, params) {
        params = params || {
          bubbles: false,
          cancelable: false,
          detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
      }

      CustomEvent.prototype = window.Event.prototype;

      window.CustomEvent = CustomEvent;
    })();


    input.forEach(item => {
      if (item.type !== 'submit' && item.type !== 'checkbox') {

        //add event listener for input
        item.addEventListener('input', function (e) {
          debounce(e, isValid)
        })

        if (item.value !== '') {
          //if input is already prefilled, check its validity
          const initCheck = new CustomEvent('initial');
          item.addEventListener('initial', isValid);
          item.dispatchEvent(initCheck);
        } else {
          //remove attribute label to hide visual warning, like red border or red icons, as it is not prefilled
          item.removeAttribute('aria-invalid');
        }
      }
    })

    document.getElementById('form-submit').addEventListener('click', formSubmit);

  })();

})();