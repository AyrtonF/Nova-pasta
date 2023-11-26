cont = 0;
function lerArquivo() {
  const fileInput = document.getElementById("adicionar-input");

  // Verifica se um arquivo foi selecionado
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const leitor = new FileReader();

    leitor.onload = function (e) {
      const conteudo = e.target.result;
      let titulo = file.name;

      //criando estrutura <div class="d-flex justify-content-start"><label class="mb-5 adicionar">Teste de leitura <span class="fechar-icone"><i id="resultado" class="fas fa-times mr-1"></i></span></label></div>

      const label = document.createElement("label");
      label.setAttribute("class", "mb-5 adicionar ");
      label.setAttribute("style", "margin-right: 0.5rem");

      const texto = document.createTextNode(titulo);
      label.appendChild(texto);
      const span = document.createElement("span");
      span.setAttribute("class", "icone-anexo");
      const icon = document.createElement("i");
      icon.setAttribute("class", "fechar-icone fas fa-times mr-1");
      span.appendChild(icon);
      label.appendChild(span);

      const resultado = document.querySelector(".anexos");
      
      if (cont < 3) {
        resultado.appendChild(label);
        cont++;
      }
      fechar();
    };

    leitor.readAsText(file);
  } else {
    console.error("Nenhum arquivo selecionado.");
  }
}

let fechar = () => {
  let iconesFechar = [...document.querySelectorAll(".fechar-icone")];
  iconesFechar.map((icone) => {
    icone.addEventListener("click", () => {
      let label = icone.parentNode.parentNode;
      label.remove();
    });
  });
};
