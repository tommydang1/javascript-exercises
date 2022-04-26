const sumAll = function(n1, n2) {
    if (typeof(n1) !== "number" || typeof(n2) !== "number") {
        return "ERROR";
    }
    if (n1 < 0 || n2 < 0) {
        return "ERROR";
    }
    return ((n1 + n2) * (n1 + n2 - 1) / 2);
};

// Do not edit below this line
module.exports = sumAll;
