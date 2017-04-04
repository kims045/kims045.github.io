//console.log('hello world');

var myStudentDebt = 800;
myStudentDebt = myStudentDebt - 100;

var myLuckyNumbers = [ 4, 7, 8, 16 ];

//console.log(myLuckyNumbers);

myLuckyNumbers[2] = 36;
//console.log(myLuckyNumbers[2]);

function addFive(x) {
	return x + 5;
}

function add(x, y) {
	console.log(x + y);
}

var myAge = 27;

if (myAge < 21) {
	console.log("u cant party");
} else {
	console.log("party on garth");
}

function addFive(x) {
	return x + 5;
}

function add(x, y) {
	x + y;
}

console.log(addFive(6) +5);

var hamburgers = 0;
//loops

for (var i = 0; i < 5; i = i + 1) {
	//some code here
	hamburgers = hamburgers + 1;
	console.log(i)

}

//conditional loops
console.log("how many licks does it take ot get to the center of a toosie pop??");


for (var licks = 1; licks <= 3; licks++) {
	if (licks < 3) {
		console.log("ahhh" + licks);
	} else {
		console.log ("CRUNCH!!");
	}
}

function askMrOwl(numOfLicks) {
	for (var licks = 1; licks <= numOfLicks; licks++) {
	if (licks < numOfLicks) {
		console.log("ahhh" + licks);
	} else {
		console.log ("CRUNCH!!");
	}
}

}

askMrOwl(18);

//	# # # # 
//	 # # # # 
//	# # # #
//	 # # # # 

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




















