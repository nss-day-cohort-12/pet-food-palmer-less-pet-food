var myDogFoodRequest = new XMLHttpRequest();

myDogFoodRequest.addEventListener("load", DisplayDogFood);
myDogFoodRequest.open("GET", "dog-food.json");
myDogFoodRequest.send();

// get reference to displaydogfood in DOM

var dogfoodEl = document.getElementById("displaydogfood");

var myCatFoodRequest = new XMLHttpRequest();

myCatFoodRequest.addEventListener("load", DisplayCatFood);
myCatFoodRequest.open("GET", "cat-food.json");
myCatFoodRequest.send();

// get reference to displaycatfood in DOM

var catfoodEl = document.getElementById("displaycatfood");

 function DisplayDogFood() {
 	// console.log(this.responseText);
 	var dogData = JSON.parse(this.responseText);
 	console.log(dogData);
 	var dogBrand = dogData.dog_brands;
 	for (var i = 0; i < dogBrand.length; i++) {
 		// console.log(dogBrand[i]);
 		var currentBrandName = dogBrand[i].name;
 		var types = dogBrand[i].types;
 		// console.log(currentBrandType);

 		for (var j = 0; j < types.length; j++) {
 			// console.log
 			var currentType = types[j].type;
 			// console.log(currentType);
 			var volumes = types[j].volumes;

 			for (var k = 0; k < volumes.length; k++) {
 				var currentVolume = volumes[k].name;
 				// console.log(currentVolume);
 				var currentPrice = volumes[k].price;
 				var dogFoodHTML = `<div class="card"><h1>${currentBrandName}</h1>`;
 				dogFoodHTML += `<h5>Type: ${currentType}</h5>`;
 				dogFoodHTML += `<h4>Size: ${currentVolume}</h4>`;
 				dogFoodHTML += `<h4>Price: $${currentPrice}</h4></div>`;
 				dogfoodEl.innerHTML += dogFoodHTML


 			};

 		}


 	};





 }

 function DisplayCatFood() {
 	// console.log(this.responseText);
 	var catData = JSON.parse(this.responseText);
 	console.log(catData);
 	var catBrand = catData.cat_brands;
 	for (var i = 0; i < catBrand.length; i++) {
 		// console.log(catBrand[i]);
 		var currentBrandName = catBrand[i].name;
 		var types = catBrand[i].types;
 		var breeds = catBrand[i].breeds;

 		// console.log(currentBrandType);

 		for (var j = 0; j < types.length; j++) {

 			var currentType = types[j].type;
 			// console.log(currentType);
 			var volumes = types[j].volumes;

 			for (var k = 0; k < volumes.length; k++) {
 				var currentVolume = volumes[k].name;
 				// console.log(currentVolume);
 				var currentPrice = volumes[k].price;
 				var catFoodHTML = `<div class="card"><h1>${currentBrandName}</h1>`;
 				catFoodHTML += `<h5>Suitable for ${breeds} cats</h5>`;
 				catFoodHTML += `<h5>Type: ${currentType}</h5>`;
 				catFoodHTML += `<h4>Size: ${currentVolume}</h4>`;
 				catFoodHTML += `<h4>Price: $${currentPrice}</h4></div>`;
 				catfoodEl.innerHTML += catFoodHTML;


 			};

 		}


 	};





 }


