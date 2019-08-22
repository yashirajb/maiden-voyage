//write this:
//the function called findMax takes in an array
//console log right away to see if it's working

function findMax(arr){
    console.log(arr)
    //anything inside of a function we need to hold on to requires a variable
    let max = 0;
    //then a for loop to access each number
    for(let i = 0; i < arr.length; i++)
    //i is the address
    //arr[i] is what LIVES at the address
    console.log(arr[i])
    //1. Compare the numbers being said and throw out the smallest of the two (holding on to the larger number each time)
    if(arr[i] > max){
        // console.log(`${arr[i]} is bigger than ${max}`)
        max = arr[i];
    }
}

return max;
//execute it ---provide name of function and pass in any params and call it
const arrayNums = [1,2,3,4,5]
const biggestNum = findMax(arrayNums)
console.log(biggestNum)

//how would you find the biggest number?
//1. Compare the numbers being said and throw out the smallest of the two (holding on to the larger number each time)

