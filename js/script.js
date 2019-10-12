document.addEventListener("DOMContentLoaded", function() {
  console.log("Скрипты подгружены");
  setOpenPopupListener();
  setClosePopupListener();
  initFormSubmit();
  initYmap();
});

function initYmap() {
  ymaps.ready(init);
  function init() { 
    var myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 17
    });
    //var myPlaceMark = new ymaps.Placemark([59.938631, 30.323055]);
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
    if(document.querySelector('.feedback-popup') && !document.querySelector('.feedback-popup').classList.contains('hidden')) {
      console.log("Попап открыт");
      let target = ev.target;
      console.log(target);
      if(target === document.querySelector('.popup-close')) {
        document.getElementById('feedback-popup').classList.add('hidden');
      }
    }
  });
}

function setOpenPopupListener() {
  document.querySelector('.feedback-link').addEventListener('click', function(ev) {
    ev.preventDefault();
    document.querySelector('.feedback-popup').classList.remove('hidden');
  });
}

function initFormSubmit() {
  console.log("Есть заход в функцию")
  document.querySelector('.feedback-submit').addEventListener('click', function(ev) {
    let inputs = document.getElementById('feedback-form').querySelectorAll('input');
    for(let i = 0; i < inputs.length; i++) {
      let formInput = inputs[i]
      if(formInput.checkValidity() == false) {
        formInput.classList.add('invalid');
      } else {
        formInput.classList.remove('invalid');      
      }
    }
  })
}