//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
}

let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bubbaBear);
console.log(merryMaltese);
console.log(gladGator);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
 // Add the addScore method
 addScore(score); {
    this.scores.push(score);
 }
 // Add the average method
 average(); {
    let sum = this.scores.reduce((a, b) => a + b, 0);
    return (sum / this.scores.length).toFixed(1);
}

// Add the status method
status(); {
    let avg = this.average();
    if (avg >= 90) {
        return 'Accepted';
    } else if (avg >= 80) {
        return 'Reserve';
    } else if (avg >= 70) {
        return 'Probationary';
    } else {
        return 'Rejected';
    }
}

// Add a score of 83 to Bubba Bear's record
bubbaBear.addScore(83);
console.log(bubbaBear.scores); // Verify the score addition

// Verify the average score calculation for Merry Maltese
console.log(merryMaltese.average()); // Should print 92.7

// Print the status of each candidate
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
// Function to boost scores to reach a specific status
function boostStatus(candidate, targetStatus) {
    while (candidate.status() !== targetStatus) {
        candidate.addScore(100); // Add a perfect score
        if (candidate.average() > 100) {
            // Prevent average from exceeding 100%
            candidate.scores.pop();
            break;
        }
    }
}

// Boost Glad Gator's status to Reserve
boostStatus(gladGator, 'Reserve');
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);

// Boost Glad Gator's status to Accepted
boostStatus(gladGator, 'Accepted');
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);