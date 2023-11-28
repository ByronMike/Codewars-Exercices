// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

export function getGrade(a: number, b: number, c: number): string {
  const mean = (a + b + c) / 3;
  if (mean >= 90) {
    return "A";
  } else if (mean >= 80) {
    return "B";
  } else if (mean >= 70) {
    return "C";
  } else if (mean >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(80, 80, 80));
