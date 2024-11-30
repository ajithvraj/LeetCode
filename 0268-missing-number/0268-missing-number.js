/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const b = nums.reduce((acc,value) => acc + value,0);
    const c = nums.length
    const d = c * (c + 1) / 2;
    const e = d - b;

    return e


    
};