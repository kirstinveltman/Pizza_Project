// Pizza Size

function getReceipt() {
	foodOrdered = ""; 
	foodPrice = "";
	
	var runningTotal = 0;
	var sizeTotal = 0;
	var sizeArray = document.getElementsByClassName("size");
	
	
	for (var i = 0; i < sizeArray.length; i++) {
		if (sizeArray[i].checked) {
			var selectedSize = sizeArray[i].value;
			foodOrdered = foodOrdered+selectedSize+"<br>";
		}
	}
		if (selectedSize === "Personal Pizza") {
			sizeTotal = 6;
			foodPrice = foodPrice+sizeTotal+"<br>";
		} else if (selectedSize === "Medium Pizza") {
			sizeTotal = 10;
			foodPrice = foodPrice+sizeTotal+"<br>";
		} else if (selectedSize === "Large Pizza") {
			sizeTotal = 14;
			foodPrice = foodPrice+sizeTotal+"<br>";
		} else if (selectedSize === "Extra Large Pizza") {
			sizeTotal = 16;
			foodPrice = foodPrice+sizeTotal+"<br>";
		}
	

	runningTotal = sizeTotal;
	getCrust(runningTotal,foodOrdered,foodPrice); 
	
	// console.log("Size added - amount foodPrice: " + foodPrice);
	// console.log("Size added - size foodOrdered: "+ foodOrdered);
	// console.log("Size added - subtotal: $"+runningTotal+".00");
};


// Crust Choice

function getCrust(runningTotal,foodOrdered,foodPrice) {
	
	var crustTotal = 0;
	var selectedCrust;
	var crustArray = document.getElementsByClassName("crust");
	
	for (var j = 0; j < crustArray.length; j++) {
		if (crustArray[j].checked) {
			selectedCrust = crustArray[j].value;
		}
		if (selectedCrust === "Cheese Stuffed Crust") {
			crustTotal = 3;
		}
	}
	
	runningTotal = (runningTotal + crustTotal);
	foodPrice = foodPrice + crustTotal + "<br>";
	foodOrdered = foodOrdered + selectedCrust + "<br>";
	getCheese(runningTotal,foodOrdered,foodPrice);
	
	// console.log("Crust added - amount foodPrice: " + foodPrice);
	// console.log("Crust added - size foodOrdered: "+ foodOrdered);
	// console.log("Crust added - subtotal: $"+runningTotal+".00");
};


// Cheese Choice

function getCheese(runningTotal,foodOrdered,foodPrice) {
	
	var cheeseTotal = 0;
	var selectedCheese = [];
	var cheeseArray = document.getElementsByClassName("cheese");
	
	for (var j = 0; j < cheeseArray.length; j++) {
		if (cheeseArray[j].checked) {
			selectedCheese = cheeseArray[j].value;
		}
		if (selectedCheese === "Extra Cheese") {
			cheeseTotal = 3;
		}
	}
	
		
	runningTotal = (runningTotal + cheeseTotal);
	foodPrice = foodPrice + cheeseTotal + "<br>";
	foodOrdered = foodOrdered + selectedCheese + "<br>";
	getSauce(runningTotal,foodOrdered,foodPrice);
	
	// console.log("Cheese added - amount foodPrice: " + foodPrice);
	// console.log("Cheese added - size foodOrdered: "+ foodOrdered);
	// console.log("Cheese added - subtotal: $"+runningTotal+".00");
};


// Sauce Choice

function getSauce(runningTotal,foodOrdered,foodPrice) {
	
	var sauceTotal = 0;
	var selectedSauce = [];
	var sauceArray = document.getElementsByClassName("sauce");
	
	for (var j = 0; j < sauceArray.length; j++) {
		if (sauceArray[j].checked) {
			selectedSauce = sauceArray[j].value;
		}
	}
	
	foodPrice = foodPrice + sauceTotal + "<br>";
	foodOrdered = foodOrdered + selectedSauce + "<br>";
	getMeat(runningTotal,foodOrdered,foodPrice);
	
	// console.log("Sauce added - amount foodPrice: " + foodPrice);
	// console.log("Sauce added - size foodOrdered: "+ foodOrdered);
	// console.log("Sauce added - subtotal: $"+runningTotal+".00");
	
};


// Meat Choice

function getMeat(runningTotal,foodOrdered,foodPrice) {
	var runningTotal = runningTotal;
	var meatTotal = 0;
	var selectedMeat = [];
	var meatArray = document.getElementsByClassName("meats");
	
	for (var j = 0; j < meatArray.length; j++) {
		if (meatArray[j].checked) {
			selectedMeat.push(meatArray[j].value);
		}
	}
	
	var meatCount = selectedMeat.length;
	
	if (meatCount > 1) {
		meatTotal = (meatCount - 1);
	} else {
		meatTotal = 0;
	}
	
	for (var j = 0; j < selectedMeat.length; j++) {
		foodOrdered = foodOrdered + selectedMeat[j] + "<br>";
		if (meatCount <= 1) {
			foodPrice = foodPrice + 0 + "<br>";
			meatCount = meatCount - 1;
		} else if (meatCount == 2) {
			foodPrice = foodPrice + 1 + "<br>";
			meatCount = meatCount - 1;
		} else {
			foodPrice = foodPrice + 1 + "<br>";
			meatCount = meatCount - 1;
		}
	}
	
	runningTotal = (runningTotal + meatTotal);
	
	// document.getElementById("showFoodOrdered").innerHTML= foodOrdered;
	// document.getElementById("showPriceOfFood").innerHTML= foodPrice;
	// document.getElementById("yourTotal").innerHTML=" " + "$" + runningTotal + ".00";
	
	getVeggie(runningTotal,foodOrdered,foodPrice);
	
	// console.log("Meat added - amount foodPrice: " + foodPrice);
	// console.log("Meat added - size foodOrdered: "+ foodOrdered);
	// console.log("Meat added - subtotal: $"+runningTotal+".00");
	
};

// Vegetables

function getVeggie(runningTotal,foodOrdered,foodPrice) {
	var runningTotal = runningTotal;
	var vegTotal = 0;
	var selectedVeg = [];
	var vegArray = document.getElementsByClassName("veg");
	
	for (var j = 0; j < vegArray.length; j++) {
		if (vegArray[j].checked) {
			selectedVeg.push(vegArray[j].value);
		}
	}
	
	var vegCount = selectedVeg.length;
	
	if (vegCount > 1) {
		vegTotal = (vegCount - 1);
	} else {
		vegTotal = 0;
	}
	
	for (var j = 0; j < selectedVeg.length; j++) {
		foodOrdered = foodOrdered + selectedVeg[j] + "<br>";

		if (vegCount <= 1) {
			foodPrice = foodPrice + 0 + "<br>";
			vegCount = vegCount - 1;
		} else if (vegCount == 2) {
			foodPrice = foodPrice + 1 + "<br>";
			vegCount = vegCount - 1;
		} else {
			foodPrice = foodPrice + 1 + "<br>";
			vegCount = vegCount - 1;
		}
	}
	
	runningTotal = (runningTotal + vegTotal);
	
	document.getElementById("showFoodOrdered").innerHTML= foodOrdered;
	document.getElementById("showPriceOfFood").innerHTML= foodPrice;
	document.getElementById("yourTotal").innerHTML=" " + "$" + runningTotal + ".00";
	
	
	// console.log("Veg added - amount foodPrice: " + foodPrice);
	// console.log("Veg added - size foodOrdered: "+ foodOrdered);
	// console.log("Veg added - subtotal: $"+runningTotal+".00");
	
};


