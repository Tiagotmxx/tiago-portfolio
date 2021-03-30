let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
function copySorted(arr) {
  const copy = arr.slice(0); //OR copy = [...arr];
  return copy.sort();
}
/**OR
 * function copySorted(arr) {
 * return arr.slice().sort();
 */
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
