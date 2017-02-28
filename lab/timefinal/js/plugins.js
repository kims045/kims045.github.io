// No need to edit this file :)

// gets the current time using `Date()` and returns the current year, month, day, hour, minute and second
function getTime() {

	// get the current date & time
	var now = new Date();

	// build an object with key:value pairs
	now = {
		year : now.getYear(),
		month : now.getMonth(),
		date : now.getDate(),
		day : now.getDay(),
		hour : now.getHours(),
		minute : now.getMinutes(),
		second : now.getSeconds()
	}

	return now;

} // end getTime()


// Returns a random integer between min (included) and max (excluded)
// example: getRandomInt(0, 20) will give you
// numbers between 0 (included) and 20 (excluded)
// or you could say numbers between 0 (included) and 19 (included)
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}



// shake an element!
// $('#selector').shake();

