var container = document.getElementById ('container');

var letters = {
	  KeyA: {
      url: "assets/css/choco1.png",
      left: "10%",
      top: "7%",
      width: "25%"
          },
    KeyB: {
      url: "assets/css/straw1.png",
      left: "10%",
      top: "7%",
      width: "25%"
    },
    KeyC: {
      url: "assets/css/caramel1.png",
      left: "10%",
      top: "7%",
      width: "25%"
    },
    KeyD: {
      url: "assets/css/grape1.png",
      left: "10%",
      top: "7%",
      width: "25%"
    },
    KeyE: {
      url: "assets/css/choco1.png",
      left: "38%",
      top: "8%",
      width: "25%"
    },
    KeyF: {
      url: "assets/css/straw1.png",
      left: "38%",
      top: "8%",
      width: "25%"
    },
    KeyG: {
      url: "assets/css/caramel1.png",
      left: "38%",
      top: "8%",
      width: "25%"
    },
    KeyH: {
      url: "assets/css/grape1.png",
      left: "38%",
      top: "8%",
      width: "25%"
    },
    KeyI: {
      url: "assets/css/choco1.png",
      left: "67%",
      top: "9%",
      width: "25%"
    },
    KeyJ: {
      url: "assets/css/straw1.png",
      left: "67%",
      top: "9%",
      width: "25%"
    },
    KeyK: {
      url: "assets/css/caramel1.png",
      left: "67%",
      top: "9%",
      width: "25%"
    },
    KeyL: {
      url: "assets/css/grape1.png",
      left: "67%",
      top: "9%",
      width: "25%"
    },
    KeyM: {
      url: "assets/css/honey.png",
      left: "8%",
      top: "7%",
      width: "14%"
    },
    KeyN: {
      url: "assets/css/grapes.png",
      left: "20%",
      top: "12%",
      width: "14%"
    },
    KeyO: {
      url: "assets/css/honey.png",
      left: "43%",
      top: "16%",
      width: "12%"
    },
    KeyP: {
      url: "assets/css/cherries.png",
      left: "45%",
      top: "2%",
      width: "16%"
    },
    KeyQ: {
      url: "assets/css/cherries.png",
      left: "62%",
      top: "13%",
      width: "12%"
    },
    KeyR: {
      url: "assets/css/grapes.png",
      left: "75%",
      top: "2%",
      width: "16%"
    },
    KeyS: {
      url: "assets/css/sprinkle.png",
      left: "13%",
      top: "6%",
      width: "18%"
    },
    KeyT: {
      url: "assets/css/sprinkle.png",
      left: "40%",
      top: "6%",
      width: "18%"
    },
    KeyU: {
      url: "assets/css/sprinkle.png",
      left: "70%",
      top: "6%",
      width: "18%"
    },
    KeyV: {
      url: "assets/css/oreo.png",
      left: "12%",
      top: "7%",
      width: "14%"
    },
    KeyW: {
      url: "assets/css/oreo.png",
      left: "39%",
      top: "7%",
      width: "14%"
    },
    KeyX: {
      url: "assets/css/oreo.png",
      left: "70%",
      top: "7%",
      width: "14%"
    },
    KeyY: {
      url: "assets/css/cho.png",
      left: "70%",
      top: "6%",
      width: "14%"
    },
    KeyZ: {
      url: "assets/css/yum.png",
      left: "17%",
      top: "8%",
      width: "100%"
    }

};

document.addEventListener("keydown", function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var img = document.createElement("img");
        img.src = letters[event.code].url;
        img.style.width = letters[event.code].width;
        img.style.left = letters[event.code].left;
        img.style.top = letters[event.code].top;
        container.appendChild(img);
    } else if (event.keyCode == 8) {
        container.removeChild(container.lastChild);
    }
});

    if (event.shiftKey == true) {
        var div = document.createElement('div');
        img.src = letters[event.code].url;
        img.style.width = letters[event.code].width;
        img.style.left = letters[event.code].left;
        img.style.top = letters[event.code].top;
  
 

	   } else if (event.keyCode == 32) {
		    var div =document.createElement('div');
		    div.classList.add('space');
		    container.appendChild(div);
	   } else if (event.keyCode == 8) {
		container.removeChild( container.lastChild );
	   }
	


