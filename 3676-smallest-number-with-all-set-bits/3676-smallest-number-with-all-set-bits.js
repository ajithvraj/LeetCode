/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {

    const bitLength = n.toString(2).length;
    
     const result = (1 << bitLength) - 1;
  
  return result;
};