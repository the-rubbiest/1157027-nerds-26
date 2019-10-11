document.addEventListener("DOMContentLoaded", function() {
  console.log("Контент загружен");
  document.querySelector('.feedback-link').addEventListener('click', function(ev) {
    ev.preventDefault();
    document.querySelector('.feedback-popup').classList.remove('hidden');
  });
  
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
});