/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {

    const a = [];

    a.push(celsius + 273.15)
    a.push(celsius * 1.80 + 32.00)

    return a

    
};