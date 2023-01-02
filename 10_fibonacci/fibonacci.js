const fibonacci = function(position) {
    if (position < 0) return "OOPS"
    let a = 0, b = 1;
    let result = a;

    for (let i = 0; i < position; i++) {
        result = b;
        [a, b] = [b, a + b];
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
