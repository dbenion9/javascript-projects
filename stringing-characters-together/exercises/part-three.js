//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

let abbreviation1 = language.slice(0, 1) + language.slice(4, 5);
console.log(abbreviation1);

//2. Without using slice(), use method chaining to accomplish the same thing.

let abbreviation2 = language.charAt(0) + language.charAt(4);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let abreviation3 = language[0] + language[4];
console.log('The abbreviation for language');
 
//4. Just for fun, try chaining 3 or more methods together, and then print the result.

let funAbbreviation = lanugage.toUpper() .charAt(0) + language.toLowerCase() .slice(4, 5);
console.log(funAbbreviation);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let titleCase = noTitleCase.split(' ').map(word => word.charAt(0) .toUpperCase() + word.slice(1)) .join(' ');
console.log(titleCase);
