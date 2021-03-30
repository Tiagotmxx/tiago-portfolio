let todos = [
  { id: 1, text: "Learn JS", done: true },
  { id: 2, text: "Seek a job", done: false },
  { id: 3, text: "Forget everything" },
];

const $input = document.querySelector("input");
const $form = document.querySelector("form");
const $ul = document.getElementById("list");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  const maxId = todos.length ? todos[todos.length - 1].id : 0;
  const id = maxId + 1;
  const text = $input.value;
  todos.push({ id, text });

  $input.value = "";

  render();
});

render();

// const $buttons = document.querySelector("button");
// $buttons.forEach(($button) => {
//   $button.addEventListener("click", (event) => {
//     const index = 1;
//     todos.splice(index, 1);
//     render();
//   });
// });

function render() {
  $ul.innerHTML = todos
    .map(
      (todo) => `
      <li class="${todo.done ? "completed" : ""}">
        <span id="${todo.id}">${todo.text}</span>
        <button id="${todo.id}">x</button>
      </li>`
    )
    .join("\n");

    const $spans = document.querySelector("span");
    $spans.forEach(($span) => {
      $span.addEventListener("click", (event) => {
        const idToToogle = Number(event.target.id);
        todos.forEach((todo) => {
          if (todos.id === idToToogle) {
            todo.done = !todo.done;
          }
        });
        render();
      });
    });



  const $buttons = document.querySelector("button");
  $buttons.forEach(($button) => {
    $button.addEventListener("click", (event) => {
      console.log(event.target.id);
      // const index = 1;
      // todos.splice(index, 1);
      const idToRemove = Number(event.target.id);
      todos = todos.filter((todo) => todo.id !== idToRemove;
      render();
    });
  });
}
