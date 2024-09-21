// Return the sum of digits of a number.

function sumOfDigits(num) {
  var sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log(sumOfDigits(1234));
