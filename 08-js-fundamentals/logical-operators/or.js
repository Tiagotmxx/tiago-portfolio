let year = prompt("Guess the year");
year = Number(year);

let bornInTheFuture = year > 2021;
let tooOldToBeAlive = year < 1903;

if (bornInTheFuture || tooOldToBeAlive) {
    alert("Year is invalid");
} else {
    alert("That's a good year!");
}