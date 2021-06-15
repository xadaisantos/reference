const random = (start, stop) => {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    let random = Math.floor( Math.random() * ( stop - start ) + start );
    return random;
}

const randomRange = (start, stop, items = 1) => {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    let range = [];
    for (let i = 0; i < items; i++) {
        range.push(Math.floor( Math.random() * ( stop - start ) + start ));
    }
    return range;
}

const randomChoice = array => {
    let random_index = Math.floor( Math.random() * array.length );
    return array[random_index];
}

const randomPop = array => {
    let random_index = Math.floor( Math.random() * array.length );
    return array.splice(random_index, 1);
}
