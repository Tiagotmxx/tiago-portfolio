/**
 * Print all prime numbers up to maxNum.
 * 
 * HINT: Implement the Sieve of Erastosthenes:
 * 1. Run through all the numbers starting from 2
 * 2. Only print those who are prime. A prime number is not divisible by any of the previous ones:
 *  a. Run through all the previous numbers, starting from 2
 *  b. Check if the current number is divisible by the current previous number
 *      i. A number is divisible by another if dividing them gives a reminder of 0
 * 
 * All numbers:  2 3 4 5 6 7 8 9 10
 * Prime numbers: 2 3 x 5 x 7 x x x 
 */

let maxNum = +prompt('Give a number to know the number primes above', 10);

for (let number = 2; number < maxNum; number++) {
    let isPrime = true;
    
    for (let previous = 2; previous < number; previous++) {
        if (number % previous === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        console.log(number);
    }
}