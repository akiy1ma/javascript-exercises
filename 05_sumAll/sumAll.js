const sumAll = function(min, max) {
    if (min < 0 || max < 0 || !Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    let sum = 0;
    // the if statement below allows function to take arguments in any order
    if (min >= max) [min, max] = [max, min];

    for (let num = min; num <= max; num++) {
        sum += num;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
