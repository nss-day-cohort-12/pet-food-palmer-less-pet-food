//get reference to cat and dog divs in DOM
var dogEl = document.getElementById('dog');
var catEl = document.getElementById('cat');

//get reference to cat and dog photo links
var dogLink = document.getElementById('link-dog');
var catLink = document.getElementById('link-cat');



dogLink.addEventListener("click", function() {
  dogEl.classList.add('visible');
  dogEl.classList.remove('hidden');

  catEl.classList.add('hidden');
  catEl.classList.remove('visible');

  dogLink.classList.add('active');
  catLink.classList.remove('active');
})


catLink.addEventListener("click", function() {
  catEl.classList.add('visible');
  catEl.classList.remove('hidden');

  dogEl.classList.add('hidden');
  dogEl.classList.remove('visible');

  catLink.classList.add('active');
  dogLink.classList.remove('active');
})