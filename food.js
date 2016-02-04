var myDogFoodRequest = new XMLHttpRequest();
myDogFoodRequest.addEventListener("load", DisplayDogFood);
myDogFoodRequest.open("GET", "dog-food.json");
myDogFoodRequest.send();


var myCatFoodRequest = new XMLHttpRequest();
myCatFoodRequest.addEventListener("load", DisplayCatFood);
myCatFoodRequest.open("GET", "cat-food.json");
myCatFoodRequest.send();

// get references to displaydogfood and displaycatfood divs in DOM
var dogfoodEl = document.getElementById("displaydogfood");
var catfoodEl = document.getElementById("displaycatfood");



function DisplayDogFood() {
 	var dogData = JSON.parse(this.responseText);
 	//console.log(dogData);

 	var dogBrand = dogData.dog_brands;

 	for (var i = 0; i < dogBrand.length; i++) {
 		// console.log(dogBrand[i]);
 		var currentBrandName = dogBrand[i].name;
 		var types = dogBrand[i].types;

 		for (var j = 0; j < types.length; j++) {
 			var currentType = types[j].type;
 			var volumes = types[j].volumes;

 			for (var k = 0; k < volumes.length; k++) {
 				var currentVolume = volumes[k].name;
 				// console.log(currentVolume);
 				var currentPrice = volumes[k].price;

        //build up HTML for each dogfood card
 				var dogFoodHTML = `<div class="card"><h1>${currentBrandName}</h1>`;
 				dogFoodHTML += `<h5>Type: ${currentType}</h5>`;
 				dogFoodHTML += `<h4>Size: ${currentVolume}</h4>`;
 				dogFoodHTML += `<h4>Price: $${currentPrice}</h4></div>`;

        //add the finished card to the innerHTML of the dog food element
 				dogfoodEl.innerHTML += dogFoodHTML

 			} //end third for loop
 		} //end second for loop
 	} //end first for loop
} //end of function



function DisplayCatFood() {
 	var catData = JSON.parse(this.responseText);
  //console.log(catData);

 	var catBrand = catData.cat_brands;

 	for (var i = 0; i < catBrand.length; i++) {
 		// console.log(catBrand[i]);
 		var currentBrandName = catBrand[i].name;
 		var types = catBrand[i].types;
 		var breeds = catBrand[i].breeds;

 		for (var j = 0; j < types.length; j++) {
 			var currentType = types[j].type;
 			var volumes = types[j].volumes;

 			for (var k = 0; k < volumes.length; k++) {
 				var currentVolume = volumes[k].name;
 				var currentPrice = volumes[k].price;

        //build up HTML for each catfood card
 				var catFoodHTML = `<div class="card"><h1>${currentBrandName}</h1>`;
 				catFoodHTML += `<h5>Suitable for ${breeds} cats</h5>`;
 				catFoodHTML += `<h5>Type: ${currentType}</h5>`;
 				catFoodHTML += `<h4>Size: ${currentVolume}</h4>`;
 				catFoodHTML += `<h4>Price: $${currentPrice}</h4></div>`;

        //add the finished card to the innerHTML of the cat food element
 				catfoodEl.innerHTML += catFoodHTML;

      } //end third for loop
    } //end second for loop
  } //end first for loop
} //end of function


