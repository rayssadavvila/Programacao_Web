const listaPessoas = document.getElementById("listaPessoas");
const btAnterior = document.getElementById("btAnterior");
const btProxima = document.getElementById("btProxima");
let indexAtual = 0;
const exibirLista = (lista) => {
  listaPessoas.innerHTML = "";
  for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const text = document.createTextNode(
    `${indexAtual+ i + 1}. ${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
    );
    li.appendChild(text);
    listaPessoas.appendChild(li);
    indexAtual = indexAtual + lista.length;
  }
};

const configurarBotoes = (data) => {
  const { previous, next } = data;

  btAnterior.disabled = previous === null;
  btAnterior.onclick = () => {
    fetchAPI(previous);
    btAnterior.disabled = true;
  };

  btProxima.disabled = next === null;
  btProxima.onclick = () => {
    fetchAPI(next);
    btProxima.disabled = true;
  };
};

const fetchAPI = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      exibirLista(data.results);
      configurarBotoes(data);
    });
};

fetchAPI("https://swapi.dev/api/people/?page=1");