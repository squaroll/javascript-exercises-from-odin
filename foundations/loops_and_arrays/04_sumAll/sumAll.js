const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return("ERROR");
    }
    if (a * b < 0) {
        return ("ERROR");
    }
    if (b < a) {
        let temp = a;
        a = b;
        b = temp;
    }
    let res = 0;
    for (let i = a; i <= b; i++) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
