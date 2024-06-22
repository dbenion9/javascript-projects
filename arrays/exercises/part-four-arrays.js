let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

let combinedCabinets = holdCabinet1.concat(holdCabinet2);
console.log(combinedCabinets);
console.log(holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

let sliceCabinet1 = holdCabinet1.slice(1, 3);
console.log(sliceCabinet1);
let sliceCabinet2 = holdCabinet2.slice(1, 3);
console.log(sliceCabinet2);
console.log(holdCabinet1);
console.log(holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

let reversedCabinet1 = holdCabinet1.reverse();
console.log(reversedCabinet1);
let soretedCabinet2 = holdCabinet2.sort();
console.log(soretedCabinet2);
console.log(holdCabinet1);
console.log(holdCabinet2);
