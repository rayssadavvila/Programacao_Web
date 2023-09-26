const listaAtividades = document.getElementById("listaAtividades");

const exibirLista = (lista) => {
    listaPessoas.innerHTML = "";
    for (let i = 0; i < lista.length; ++i) {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = lista[i].link;
    link.textContent = `${lista[i].activity} (${lista[i].type}) (${lista[i].participants}) (${lista[i].price}) (${lista[i].accessibility})`;
    li.appendChild(link);
    listaAtividades.appendChild(li);
    }
  };

  const fetchAPI = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        exibirLista(data.results);
        configurarBotoes([data]);
      });
  };

  fetchAPI("http://www.boredapi.com/api/activity/");