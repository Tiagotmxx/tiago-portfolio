shout("Hello world");
shout("Did you get it?");
shout("Then let's move on!");

function shout(str) {
  console.log(str.toUpperCase());
}

const shoutedStr = "Hello world".toUpperCase();
const yelledStr = `${shoutedStr}!!!`;
const htmlStr = `<h1>${yelledStr}</h1>`;
console.log(htmlStr);

//With functions

// const shoutedStr = shout("Hello world");
// const yelledStr = yell(shoutedStr);
// const htmlStr = html(yelledStr);
// console.log(htmlStr);

function shout(str) {
  return str.toUpperCase();
}

function yell(str) {
  return str + "!!!";
}

function html(str) {
  return `<h1>${str}</h1>`;
}
