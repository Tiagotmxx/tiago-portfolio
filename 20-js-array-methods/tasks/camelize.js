// console.log(
//   camelize("background-color") == "backgroundColor" &&
//     camelize("list-style-image") == "listStyleImage" &&
//     camelize("-webkit-transition") == "WebkitTransition"
// );
console.log(
  camelize("background-color"),
  camelize("list-style-image"),
  camelize("-webkit-transition")
);

function camelize(str) {
  const tokens = str.split("-");
  const mappedTokens = tokens.map((token, index) =>
    index === 0 ? token : capitalize(token)
  );
  return mappedTokens.join("");
}

function capitalize(str) {
  const [first, ...rest] = str.split("");
  return first.toUpperCase() + rest.join("");
}
