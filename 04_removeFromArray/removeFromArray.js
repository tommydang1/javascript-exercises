const removeFromArray = function() {
    for (var i = 1; i < arguments.length; i++) {
        var item = arguments[0].indexOf(arguments[i]);
        if (item in arguments[0]) {
            arguments[0].splice(arguments[0].indexOf(arguments[i]), 1);
        }
    }
    return arguments[0];
};

// Do not edit below this line
module.exports = removeFromArray;
