let colors = ['blue', 'red'];

function addColor(color, callback){
	setTimeout(() => {
		colors.push(color)
		if (! (callback === undefined) ) {
			callback();
		};
	}, 2000);
}

function printColors(){
	setTimeout(() => {
		colors.forEach((color) => console.log(color))
	}, 1000)
}

addColor('green', printColors);


// the setTimeout() function is simulating server delay.
// The function printColors is added as a callback function to be executed after pushing the new color.
// This is important when a function 'a' previously called is necessary for a second function 'b' to work properly, but
// 'a' hasn't finished when 'b' started.

// This solution is called a callback