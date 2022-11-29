/**
 * QUESTION: You are given a sorted array arr, your task is to sort the squares of each element of the array
 * INPUT:
 *  n - the length of array
 * arr - the array itself
 * OUTPUT:
 * A sorted array of squares
 * CONSTRAINTS:
 * 1 <= arr.length <= 1000
 * -1000 < arr1[i] < 1000
 * arr is sorted in ascending order
 * All elements in array are unique.
 */

//SOLUTION
const sortSquares = (arr = []) => {
    if (arr.length === 0 ) return 'Empty array.';
    let squaredResult = []
    for(let i = 0; i < arr.length; i++){
        squaredResult.push((arr[i] * arr[i]));
    }
    return squaredResult;
}

let myArr = [1, 9, 6, 8, 2, 7, 4, 3];
let returnedArray = sortSquares(myArr).sort(function(a,b){return a - b})
console.log(returnedArray);