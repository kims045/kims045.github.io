
function checkerboard(width, height) {
var checkerboard = "";
	for (j = 0; j < height; j++) {
		if ( j % 2) {
			for (i = 0; i < width; i++) {
				if (i % 2){
					checkerboard = checkerboard + "#"
				} else {
					checkerboard = checkerboard + " "
				}
			}
		} else {
			for  (i = 0; i < width; i++) {
				if ( i % 2) {
					checkerboard = checkerboard + " "
				} else {
					checkerboard = checkerboard + "#"
				}
			}
		}
		checkerboard = checkerboard + "\n"
	}

	console.log(checkerboard);

}


////////.

var myButton = document.getElementById("myButton");

myButton.addEventListener("click", 
	function checkerboard(width, height) {
	
	
	event.stopPropagation();
});



//////////
var html = document.documentElement;
html.addEventListener("click", function (event){
	console.log(event.clientX + ", " + event.clientY);

})












