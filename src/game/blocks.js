async function getRandomBlock() {
    let randomBlock = Math.random();
    let result;

    switch (true) {
        case randomBlock < 0.33:
            result = "reta";
            break;
        case randomBlock < 0.66:
            result = "curva";
            break;
        default:
            result = "confronto";
    }

    return result;
}

export { getRandomBlock };