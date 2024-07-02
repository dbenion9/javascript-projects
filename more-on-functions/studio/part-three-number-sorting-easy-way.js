//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.
let sortedNums1Asc = [...nums1].sort((a, b) => a - b);
let sortedNums2Asc = [...nums2].sort((a, b) => a - b);
let sortedNums3Asc = [...nums3].sort((a, b) => a - b);

console.log(sortedNums1Asc); // Output: [2, 5, 10, 42]
console.log(sortedNums2Asc); // Output: [-44, -10, -2, 0, 0, 3, 3, 5]
console.log(sortedNums3Asc); // Output: [-3.3, 0, 4, 4.4, 5, 5, 8, 10, 200]


//Sort each array in descending order.
let sortedNums1Desc = [...nums1].sort((a, b) => b - a);
let sortedNums2Desc = [...nums2].sort((a, b) => b - a);
let sortedNums3Desc = [...nums3].sort((a, b) => b - a);

console.log(sortedNums1Desc); // Output: [42, 10, 5, 2]
console.log(sortedNums2Desc); // Output: [5, 3, 3, 0, 0, -2, -10, -44]
console.log(sortedNums3Desc); // Output: [200, 10, 8, 5, 5, 4.4, 4, 0, -3.3]