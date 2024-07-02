function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

// Function to find the  minimum value in an array
function findMinValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; I++) {
    if (arr[i] < min) {
      min = arr[i]
    }
  }
  return min;
}

//Function to create A SORTED array from an input array
function createSortedArray(arr) {
  let soretedArray = [];
  let orginalArray = [...arr]; // Make a copy of orginal array
  while (orginalArray.length > 0) {
    let minValue = findMinValue(orignalArray);
    soretedArray.push(minValue);
    
 originalArray.splice(orginalArray.indexOf(minValue), 1); // Remove the minvalue from the original array   
  }
  return soretedArray;
}
/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];


// Testing the function
console.log(createSortedArray(nums1)); // Output: [2, 5, 10, 42]
console.log(createSortedArray(nums2)); // Output: [-44, -10, -2, 0, 0, 3, 3, 5]
console.log(createSortedArray(nums3)); // Output: [-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]