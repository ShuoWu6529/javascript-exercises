const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }

   if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let smaller = num1;
    let larger = num2;
    if (num1 > num2){
        smaller = num2;
        larger = num1;
    }
    let result = 0;
    for (let i = smaller; i <= larger; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
