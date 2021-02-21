let maxNum = 10;
for (let number = 2; number < maxNum; number++) {
    let isPrime = true;

    /* checks if the number is prime */
    for (let previous = 2; previous < number; previous++) {
        if (number % previous === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(number);
    }
}