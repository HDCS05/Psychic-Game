//alphabet letters and random value
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ramdomvalue = letters[Math.floor(letters.length * Math.random())];

//counters
var vwins = 0;
var dwins = document.getElementById("dwins");
dwins.textContent = vwins;
var vlosses = 0;
var dlosses = document.getElementById("dlosses");
dlosses.textContent = vlosses;
var vgamesleft = 6;
var dgamesleft = document.getElementById("dgamesleft");
dgamesleft.textContent = vgamesleft;
var vgamesplay = 0;
var dgamesplay = document.getElementById("dgamesplay");
dgamesplay.textContent = vgamesplay;

// Let's start by grabbing a reference to the <span> below.
var userText = document.getElementById("user-text");

// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function(event) {

	userText.textContent = event.key;
	vgamesplay++;
	dgamesplay.textContent = vgamesplay;

	if (vgamesleft >= 1) {
		console.log("Key pressed " + event.key.toLowerCase());
		console.log("Current ramdom value " + ramdomvalue);
		if (event.key.toLowerCase() == ramdomvalue) {
			vwins++;
			dwins.textContent = vwins;

			//document.getElementById("playb").play();
  			var playPromise = document.getElementById("playw").play();
  			if (playPromise !== undefined) {
    			playPromise.then(_ => {
      			// Automatic playback started!
      			// Show playing UI.
    			})
    			.catch(error => {
      			// Auto-play was prevented
      			// Show paused UI.
    			});
  			}

			//alert("You won this time");
		}
			else {
				vlosses++;
				dlosses.textContent = vlosses;
				vgamesleft--;
				dgamesleft.textContent = vgamesleft;

				//document.getElementById("playb").play();
  				var playPromise = document.getElementById("playl").play();
  				if (playPromise !== undefined) {
    				playPromise.then(_ => {
      				// Automatic playback started!
      				// Show playing UI.
    				})
    				.catch(error => {
      				// Auto-play was prevented
      				// Show paused UI.
    				});
  				}

				//alert("You loose this time");
			}

	}
		else {

			var playPromise = document.getElementById("playf").play();
  			if (playPromise !== undefined) {
    			playPromise.then(_ => {
      			// Automatic playback started!
      			// Show playing UI.
    			})
    			.catch(error => {
      			// Auto-play was prevented
      			// Show paused UI.
    			});
  			}

      vwins = 0;
      dwins = document.getElementById("dwins");
      dwins.textContent = vwins;
      vlosses = 0;
      dlosses = document.getElementById("dlosses");
      dlosses.textContent = vlosses;
      vgamesleft = 6;
      dgamesleft = document.getElementById("dgamesleft");
      dgamesleft.textContent = vgamesleft;
      vgamesplay = 0;
      dgamesplay = document.getElementById("dgamesplay");
      dgamesplay.textContent = vgamesplay;

			alert("This Game Is Over");

			//location.reload();
		}

	ramdomvalue = letters[Math.floor(letters.length * Math.random())];
	console.log("Next Random Value " + ramdomvalue);
};



