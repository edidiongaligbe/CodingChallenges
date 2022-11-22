/**
 * QUESTION: You are given three sorted arrays, arr1, arr2, arr3. Your task is to return a sorted array of elements that are common to 
 * all three arrays.
 * INPUT:
 *  n1, n2, n3 - The lenghts of arr1, arr2, arr3 respectively
 * arr1, arr2, arr3 - Sorted arrays.
 * OUTPUT:
 * A sorted array of numbers common to arr1, arr2, arr3
 * CONSTRAINTS:
 * 1 <= arr1.length, arr2.length, arr3.length <= 1000
 * 1 <= arr1[i], arr2[i], arr3[i] <=2000
 * There will be at least one element common to all three arrays.
 */

//SOLUTION
const findCommonElements = (arr1, arr2, arr3, n1, n2, n3) => {
   let arr = [], a_loc = 0, b_loc = 0, c_loc = 0;
   while(a_loc < n1 && b_loc < n2 && c_loc < n3){
        let a = arr1[a_loc], b = arr2[b_loc], c = arr3[c_loc];
        if (a === b && b === c){
            arr.push(a);
            a_loc += 1;
            b_loc +=1; 
            c_loc += 1;
        } else if(a <= b && a <= c){
            a_loc += 1;
        }else if(b <= a && b <= c){
            b_loc +=1;
        } else{
            c_loc += 1;
        }
   }
   return arr;
}

let a1 = [1, 2, 4], a2 = [1, 2, 4], a3 = [2, 3, 6];
console.log(findCommonElements(a1, a2, a3, 3, 3, 3));
