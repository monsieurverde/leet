/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

let nums = [2,5,5,11]

let target = 10

var twoSum = function(nums, target) {   
    let i = 0;
    let j = 1;
    
    let z = nums.length;
    let x = [];
    
    while(i<z) {
        let j = 1;
       while(j<z) {
            check = (nums[i]+nums[j]);
            if(check === target && i!==j){
                x.push(i,j);
                console.log(x);
                break;
            }
            else{j++
                console.log(i);
                console.log(j);
            }
        }i++
         
    }
};


twoSum(nums,target)

