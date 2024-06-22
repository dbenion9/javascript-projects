//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const readlineSync = requires('readline-sync');

let fuelLevel;
let numAstronauts;
let altitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while (true) {
  fuelLevel = parseInt(readlineSync.question("Enter the starting fuel level (betwwn 5000 and 30000): "), 10);
    if (fuelLevel > 5000 && fuelLevel < 30000) {
      break;
     } else {
      console.log("Invalid input. Please enter a positive integer greater than 5000 and less than 30000.");
     }
} 




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (true) {
    numAstronauts =
    parseInt(readlineSync.question("Enter the number of astronauts (up to 7): "), 10);
    break;
  } else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
  }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel > 0) {
  fuelLevel -= numAstronauts * 100;
  if (fuelLevel >= 0) {
    altitude =+ 50;
  }
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log('The shuttle gained an altitude of $ {altitude} km.');

if (altitude >= 2000) {
  console.log("Orbit achieved");
} else {
  console.log("Failed to reach orbit.");
}