const arr = [7,5,3,8,11,37],
 arr2 = [4,9,12,1,6,4];


const findOneMatch = function (array, array2) {
    const num = 15;
    let obj = {};


    for(let i = 0; i < array.length; i++) {

        obj[i] = array[i];

        for(let k = 0; k < array2.length; k++) {

            let sum = obj[i] + array2[k];

            if(sum === num) {

                console.log(obj[i],array2[k],sum);
                return true;
            }
        }
    }
    return false;
}

findOneMatch(arr,arr2);