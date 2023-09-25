const listaAtividades = document.getElementById("listaAtividades");

const exibirLista = (lista) => {
    listaPessoas.innerHTML = "";
    for (let i = 0; i < lista.length; ++i) {
      const li = document.createElement("li");
      listaPessoas.start = contIndex;
      const text = document.createTextNode(
        `${lista[i].name} (${lista[i].birth_year}) (${lista[i].height} cm)`
      );
      li.appendChild(text);
      listaPessoas.appendChild(li);
    }
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

  fetchAPI("http://www.boredapi.com/api/activity/");