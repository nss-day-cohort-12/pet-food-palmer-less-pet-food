//get references to cat and dog divs in DOM
var dogEl = document.getElementById('dog');
var catEl = document.getElementById('cat');

//get references to cat and dog photo links
var dogLink = document.getElementById('link-dog');
var catLink = document.getElementById('link-cat');



dogLink.addEventListener("click", function() {
  //show dog div
  dogEl.classList.add('visible');
  dogEl.classList.remove('hidden');

  //hide cat div
  catEl.classList.add('hidden');
  catEl.classList.remove('visible');

  //focus on dog link, blur cat link
  dogLink.classList.add('active');
  catLink.classList.remove('active');
});


catLink.addEventListener("click", function() {
  //show cat div
  catEl.classList.add('visible');
  catEl.classList.remove('hidden');

  //hide dog dig
  dogEl.classList.add('hidden');
  dogEl.classList.remove('visible');

  //focus on cat link, blur dog link
  catLink.classList.add('active');
  dogLink.classList.remove('active');
});