/**
 * QUESTION: You are given an an array candies, where candies[i] defines how many candies the i-th kid will has. You are also given
 * an integer, extra_candies which can be distributed among the kids.
 * 
 * For each kid, check if there is a way to distribute extra_candies
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

const stuffCandies = ( arr = [], extra = 0) =>{
    if (arr.length === 0 ) return 'Empty array.';
    let maxNo = 0;
    for(let i = 0; i < arr.length; i++){
        if(maxNo < arr[i]){
            maxNo = arr[i]
        }
    }

    let candies = [];
    for(let i = 0; i < arr.length; i++){
       if (arr[i] + extra > maxNo){
        candies.push(1);
       } else {
        candies.push(0);
       }
    }
    console.log(arr);
    return candies;
}

let myArr = [8, 9, 0];
console.log(stuffCandies(myArr, 3));