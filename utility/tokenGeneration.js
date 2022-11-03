const crypto = require("crypto");

exports.generate = function() {
    return crypto.randomInt(0, 1000000)
}



