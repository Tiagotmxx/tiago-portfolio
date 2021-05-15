async function gimmeLuke() {
  const response = await fetch("https://swapi.dev/api/people/1");
  const body = await response.json();
  return body.name;
}

gimmeLuke().then((name) => console.log(name));

async function loadScripts() {
  try {
    const script1 = await loadScripts("1.js");
    const script2 = await loadScripts("2.js");
    const script3 = await loadScripts("3.js");
  }
} //TERMINAR CODIGO
