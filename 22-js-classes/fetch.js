const promise = fetch("https://swapi.dev/api/people/1/");
promise
  .then((response) => {
    console.log(response.ok);
    console.log(response.status);
    console.log(response.headers);

    return response.json();
  })
  .then((body) => {
    console.log(body);
  });
