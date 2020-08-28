function range(start, stop, step = 1) {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }
    let newArr = [];
    for (let i = start; i < stop; i += step) {
        newArr.push(i);
    }
    return newArr;
};

function divisors(x){
    let divisors = [];
    for (let i = 1; i <= Math.floor(x/2); i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(x);
    return divisors;
};

function isPrime(x){
	let divisors = [];
    for (let i = 1; i <= Math.floor(x/2); i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(x);
    return divisors.length === 2
};

function isPerfectSquare(x){
    return x**(1/2) === Math.floor(x**(1/2));
}

function randInt(start, stop, step = 1) {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    let x = Math.floor(Math.random() * (stop - start)) + start;
    return x;
}

function randChoice(array) {
    let random_index = randInt(array.length);
    return array[random_index];
}

function to_underscores(text){
	text = text.split('').map((letter, index) => {
		if (index === 0){
			return "_";
		} else if (letter === " "){
			return "  ";
		} else {
			return " _";
		}
	}).join('');

	return text;
}

function fii_dyAnualizado(dyMes, precoCota){
	return (12 * (dyMes / precoCota) * 100).toFixed(2);
}

// console.log(fii_dyAnualizado(0.76, 115.15));

// Type the line below on another .js file
// to import this module.
// The path may vary, but you use the filename
// The variable name can be anything

// const mymath = require("./reference/myMath_demo");

module.exports = {range, divisors, isPrime, isPerfectSquare, randInt, randChoice, fii_dyAnualizado, to_underscores};