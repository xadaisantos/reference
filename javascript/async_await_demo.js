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

async function init() {
    await addColor('green');
    printColors();
}

init()

// the setTimeout() function is simulating server delay.
// This is a different way to handle promises, using the async await.

// This solution is called Async Await