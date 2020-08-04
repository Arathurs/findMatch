

function twoSum(nums, target) {
    let obj = {}
    nums.forEach(num => {
        obj[num] = num;
    });
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if(obj.hasOwnProperty(complement)) {
            const index = nums.indexOf(complement);
            if(index !== i) {
                return new Array (i,index);
                break;
            }
        }
    }
}