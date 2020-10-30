const divisors = x => {
    let divisors = [];
    for (let i = 1; i <= Math.floor(x/2); i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(x);
    return divisors;
};

const isPrime = x => {
	let divisors = [];
    for (let i = 1; i <= Math.floor(x/2); i++) {
        if (x % i === 0) {
            divisors.push(i);
        }
    }
    divisors.push(x);
    return divisors.length === 2
};

const isPerfectSquare = x => {
    return x**(1/2) === Math.floor(x**(1/2));
}

const to_underscores = text => {
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
};
