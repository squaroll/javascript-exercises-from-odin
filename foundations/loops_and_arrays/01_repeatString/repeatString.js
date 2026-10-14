const repeatString = function(string, num) {
    res = '';
    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 1; i <= num; i++) {
        res = res + string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
