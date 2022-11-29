/**
 * QUESTION: You are given an array consisting of 2n elements in the form [x1, x2, x3, y1, y2, y3,..yn]
 * Return an array in the form [x1, y1, x2, y2, x3, y3, ..yn]
 * INPUT:
 *  n - half the size of the array
 * arr - An array of size 2n
 * OUTPUT:
 * An array of the form [x1, y1, x2, y2, x3, y3, ..yn]
 * CONSTRAINTS:
 * 1 <= n <= 500
 * arr.length = 2n
 * 1 <= arr[i] <= 1000
 */

//SOLUTION
const shuffleArray = (n = 0, arr = []) => {
    if (arr.length === 0 ) return 'Empty array.';
    let newArr = [];
    let stopLoopValue = n - 1;
    for(let i = 0; i <= stopLoopValue; i++){
        newArr.push(arr[i]);
        newArr.push(arr[n]);
        n += 1;
    }
    return newArr;
}

let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let arrHalfLength = myArr.length / 2;
console.log(shuffleArray(arrHalfLength, myArr));