function pesquisar () {
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  campoPesquisa = campoPesquisa.toLowerCase();

  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
    }else if(campoPesquisa == "") {
      section.innerHTML = "<p>Nada foi encontrado. O campo de pesquisa está vazio.</p>";
      return
    } else if (!resultados) {
      section.innerHTML = "<p>Nada foi encontrado. Não a nada sobre isso em nossa base de dados.</p>";
      return
    }else if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você não buscou pelo atleta</p>";
      return
    }

  

    

    
  }

  section.innerHTML = resultados

}



