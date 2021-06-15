let colors = ['blue', 'red'];

function addColor(color){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            colors.push(color)

            const error = false;
            
            if (!error) {
                resolve();
            } else {
                reject('Error: something went wrong');
            }
        }, 2000);
    });
}

function printColors(){
	setTimeout(() => {
		colors.forEach((color) => console.log(color))
	}, 1000)
}

addColor('green')
    .then(printColors)
    .catch(err => console.log(err));

// the setTimeout() function is simulating server delay.
// Promises are used just like callbacks to handle things that take more time to solve
// then the things the need the first thing, but come right after and solve quicker
// the 'resolve' argument executes the '.then()' method (probably)
// the 'reject' argument uses the '.catch()' method

// This solution is called Promise

