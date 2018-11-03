//newArray[0] -> newArray[4]
//newArray[4] -> newArray[0]
//newArray[1] -> newArray[3]
//newArray[3] -> newArray[1]
//newArray[2] -> newArray[2] 
let newArray = [1, 2, 3, 4, 5];
function reverse(array) {
    for (let i = 0; i < (array.length) / 2; i++) {
        const j = array.length - 1 - i;
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

console.log(reverse(newArray));
