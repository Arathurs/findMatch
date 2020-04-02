const arr = [7,5,3,8,11,37],
 arr2 = [4,9,12,1,6,4],
 arr3 = [0,0,0,0,0,0];


const findAllMatches = function (array, array2) {
    const num = 15;
    let obj = {},
     count = 0;


    for(let i = 0; i < array.length; i++) {

        obj[i] = array[i];

        for(let k = 0; k < array2.length; k++) {

            let sum = obj[i] + array2[k];

            if(sum === num) {

                count++;
                console.log(obj[i],array2[k],sum,count);
                
            }
        }
    }

    console.log(count);

    if (count) {
        
        return true;
    }
    
    return false;
}

findAllMatches(arr,arr2);