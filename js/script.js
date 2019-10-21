document.addEventListener('DOMContentLoaded', function() {
  setOpenPopupListener();
  setClosePopupListener();
  initFormSubmit();
  initYmap();
  initDropErrorsListener();
});

function initYmap() {
  ymaps.ready(init);
  function init() { 
    var myMap = new ymaps.Map('map', {
        center: [59.938631, 30.323055],
        zoom: 17
    });
    var myPlaceMark = new ymaps.Placemark([59.938631, 30.323055], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-marker.png',
      iconImageSize: [367, 190],
      iconImageOffset: [0, 0]
    });
    myMap.geoObjects.add(myPlaceMark);
  }
}

function setClosePopupListener() {
  document.addEventListener('click', function(ev) {
    let target = ev.target;
    if(target === document.querySelector('.popup-close')) {
      closePopup();
    }
  });
  document.addEventListener('keydown', function(ev) {
    if(ev.keyCode === 27) {
      ev.preventDefault();
      closePopup();
    }
  });
}

function setOpenPopupListener() {  
  document.querySelector('.feedback-link').addEventListener('click', function(ev) {
    ev.preventDefault();
    let nameInput = document.getElementById('name');
    document.querySelector('.feedback-popup').classList.remove('hidden');
    nameInput.focus();
  });
}

function initFormSubmit() {
  document.querySelector('.feedback-submit').addEventListener('click', function(ev) {
    let inputs = getPopupInputs();
    for(let i = 0; i < inputs.length; i++) {
      let formInput = inputs[i]
      if(formInput.checkValidity() == false) {
        formInput.classList.add('invalid');
      } else {
        formInput.classList.remove('invalid');      
      }
    }     
  });
}

function getPopupInputs() {
  let inputs = [];
    for(let input of document.getElementById('feedback-form').querySelectorAll('input')) {
      inputs.push(input);
    }
    for(let input of document.getElementById('feedback-form').querySelectorAll('textarea')) {
      inputs.push(input);
    }
    return inputs;
}

function initDropErrorsListener() {
  let inputs = getPopupInputs();
  for(let input of inputs) {
    input.addEventListener('input', function(ev) {
      input.classList.remove('invalid');
    });
  }
}

function closePopup() {
  if(document.querySelector('.feedback-popup') && !document.querySelector('.feedback-popup').classList.contains('hidden')) {
    document.getElementById('feedback-popup').classList.add('hidden');
  }
}
