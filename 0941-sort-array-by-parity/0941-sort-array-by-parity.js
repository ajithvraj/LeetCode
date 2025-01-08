/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let a=[]
    let b=[]
    nums.map((num)=>{
        if(num%2==0){
           a.push(num)
        }else{
            b.push(num)
        }
    })
    return a.concat(b);
};