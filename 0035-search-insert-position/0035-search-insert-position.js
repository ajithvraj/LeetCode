 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

        nums.push(target)
        const x = nums.sort((a,b) => a - b)
        const y = x.indexOf(target)
        return y;
    
    }



    
