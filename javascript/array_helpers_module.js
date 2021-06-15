const range = (start, stop, step = 1) => {
    if (stop === undefined){
        stop = start;
        start = 0;
    }

    let range = [];
    for (let i = start; i < stop; i = i + step) {
        range.push(i);
    }
    return range;
}

const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
