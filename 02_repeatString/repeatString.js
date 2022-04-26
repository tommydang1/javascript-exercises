const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    var string_repeated = '';
    for (var i = 0; i < num; i++) {
        string_repeated += string;
    }
    return string_repeated;
};

// Do not edit below this line
module.exports = repeatString;
