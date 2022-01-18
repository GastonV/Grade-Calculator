// Returns true if val is between 0-100 & is number
const isValid = (val) => isNumber(val) && val > -1 && val < 101 ? true : false;


// Returns True if val is a number.
const isNumber = (val) => typeof val === 'number' ? true : false;


// Returns the sum of an array.
const sumifier = (arrVal) => arrVal.reduce((prevVal, curVal) => prevVal + curVal);


// Returns the average of an array.
const averageGrade = (arrVal) => sumifier(arrVal) / arrVal.length;


// Returns a numbered grade based on the average of grades.
const gradeLetter = (arrVal) => {
  const gpa = averageGrade(arrVal);
  switch (true) {
    case (gpa > -1 && gpa < 60):
      return 'F';
      break;
    case (gpa > 59 && gpa < 70):
      return 'D';
      break;
    case (gpa > 69 && gpa < 80):
      return 'C';
      break;
    case (gpa > 79 && gpa < 90):
      return 'B';
      break;
    case (gpa > 89 && gpa < 101):
      return 'A';
      break;
  }
}

// Main Function, called to start program.
const finalGrade = (as1, as2, as3) => {
  const arr = [as1, as2, as3];
  const valid = arr.every(element => isValid(element));
  return valid ? gradeLetter(arr) : "You have entered an invalid grade.";
};


// Calls the finalGrade function for testing //
// console.log(finalGrade(10, 5, 100));
