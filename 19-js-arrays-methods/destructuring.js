function print(messages) {
  messages.forEach((message) => {
    console.log(message);
  });
}

print(["Hello world!", "how are you?"]);

const sum = (a, b) => a + b;

const sumMany = (...numbers) => numbers.reduce(sum, 0);

sumMany(1, 2, 3, 4, 5);

let options = {
  size: {
    width: 100,
    height: 200,
  },
  item: ["Cake", "Donut"],
  extra: true,
};

const { items } = options;

const [, sweet] = items;
console.log(sweet);
