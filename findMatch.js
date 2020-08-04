

function twoSum(nums, target) {
    let hash = {};
    nums.forEach(num => {
        hash[num] = num;
    });
    
    for (let i = 0; i < nums.length; i++) {
        const partner = target - nums[i];
        
        if(hash.hasOwnProperty(partner)) {
            const index = nums.indexOf(partner);
            if(index !== i) {
                return new Array (i,index);
                break;
            }
        }
    }
}