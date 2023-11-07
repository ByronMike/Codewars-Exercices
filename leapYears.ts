export function isLeap(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  }
  return false;
}

const year = 2800;
console.log(isLeap(year));
console.log(2020 % 400);
