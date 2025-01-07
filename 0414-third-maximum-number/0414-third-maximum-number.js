/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uniqueNums = [];
    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.includes(nums[i])) {
            uniqueNums.push(nums[i]);
        }
    }

    uniqueNums.sort((a, b) => b - a);
    
    return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
};
