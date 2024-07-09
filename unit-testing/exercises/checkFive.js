function checkFive(num){
   let result = '';
   if (num < 5){
     result = num + " is less than 5.";
   } else if (num === 5){
     result = num + " is equal to 5.";
   } else {
     result = num + " is greater than 5.";
   }
   return result;
 }

 const test = require('../checkFive.js');

 const checkFive = require('../checkFive.js');

 describe("checkFive", function(){

    test("Descriptive feedback...", function() {
       //code here...
    });

 });

 const checkFive = require('../checkFive.js');

 describe("checkFive", function(){

    test("Descriptive feedback...", function(){
       let output = checkFive(2);
    });

 });

 const checkFive = require('../checkFive.js');

 describe("checkFive", function(){

    test("Descriptive feedback...", function(){
       let output = checkFive(2);
       expect(output).toEqual("2 is less than 5.");
    });

 });

 test("returns 'num is less than 5' when num < 5.", function() {
  // test code //
});

expect(output).toBe("2 is less than 5.");

if (num > 5) {
  // sourcecode //
}