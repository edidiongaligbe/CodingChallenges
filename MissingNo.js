/**
 * QUESTION: You are given an integer n, along with n-1 numbers in the range of 1 to n, with no duplicates, one number is missing from
 * the array, find that number
 * INPUT:
 *  n - an integer
 * arr - an array of n - 1
 * OUTPUT:
 * The single missing number
 * CONSTRAINTS:
 * 1 < n < 1000
 * 1 < arr1[i] < 1000
 * All elements in array are unique.
 */

//SOLUTION
const findMissingNumber = (arr = []) => {
    if (arr.length === 0 ) return 'Empty array.'
    arr.sort();
    console.log(arr.sort())
    for(let i = 0; i <= arr.length; i++){
      let num = arr[i] + 1;
      if (num !== arr[i + 1]) {
        let missingNum = arr[i] + 1;
        return missingNum
      }
    }
}

let myArr = [1, 9, 6, 8, 2, 7, 4, 3];
console.log(findMissingNumber(myArr));