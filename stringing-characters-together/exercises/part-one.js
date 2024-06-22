let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

function ciuntDigits(num) {
    //Covert number to string
    

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let numString = num.toString();
}
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
let numString = num.toString ();

// Check if it contains a decimal point
if (numString.includes('.')) {
    // Remove the decimal point and return the length

        return numString.replace( '.', '').length;
} else {
    // Return the length for integers
    return numString.length;
    }
