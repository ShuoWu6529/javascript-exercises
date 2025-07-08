const removeFromArray = function(arr, ...otherArguments) {
    let result = [];
    for (const element of arr) {
        if (otherArguments.includes(element)){
            continue;
        }
        result.push(element);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
