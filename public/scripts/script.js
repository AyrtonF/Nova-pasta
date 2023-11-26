document.addEventListener("DOMContentLoaded", function () {
  const listaDeFeedbacks = [];

  let contador = 0;

  // Adicione a seguinte função para atualizar curtidas via API
async function atualizarCurtidas(feedbackId) {
  const response = await fetch(`/update-curtidas/${feedbackId}`, {
    method: "PUT",
  });

  if (response.ok) {
    // Atualize a interface do usuário conforme necessário
    loadFeedbacks();
  } else {
    console.error("Erro ao atualizar curtidas.");
  }
}

// Atualize a função atualizarIcon() para chamar a função atualizarCurtidas()
atualizarIcon = () => {
  const caixas = [...document.querySelectorAll(".caixa")];

  caixas.map((caixa) => {
    caixa.addEventListener("click", (e) => {
      e.preventDefault();
      const icone = caixa.querySelector("i");
      const espacoCurtidas = caixa.parentNode;
      const feedbackId = espacoCurtidas.getAttribute("data-feedback-id");

      icone.classList.toggle("fa-regular");
      icone.classList.toggle("fa-solid");

      if (icone.classList.contains("fa-solid")) {
        // Atualize o número de curtidas localmente antes de chamar a API
        const numCurtidasElement = espacoCurtidas.querySelector(".curtida");
        numCurtidasElement.innerHTML = `${Number(numCurtidasElement.innerHTML) + 1}`;
        atualizarCurtidas(feedbackId);
      } else {
        // Atualize o número de curtidas localmente antes de chamar a API
        const numCurtidasElement = espacoCurtidas.querySelector(".curtida");
        numCurtidasElement.innerHTML = `${Number(numCurtidasElement.innerHTML) - 1}`;
        atualizarCurtidas(feedbackId);
      }
    });
  });
};


  atualizarIcon = () => {
    const caixas = [...document.querySelectorAll(".caixa")];

    caixas.map((caixa) => {
      caixa.addEventListener("click", (e) => {
        e.preventDefault();
        const icone = caixa.querySelector("i");
        const espacoCurtidas = caixa.parentNode;
        const curtida = espacoCurtidas.querySelector("p.curtida");
        icone.classList.toggle("fa-regular");
        icone.classList.toggle("fa-solid");
        console.log(espacoCurtidas);
        console.log(curtida);
        if (icone.classList.contains("fa-solid")) {
          curtida.innerHTML = `${Number(curtida.innerHTML) + 1}`;
        } else {
          curtida.innerHTML = `${Number(curtida.innerHTML) - 1}`;
        }
        console.log(icone);
      });
    });
  };

  async function loadFeedbacks() {
    const response = await fetch("/feedbacks");
    const feedbacks = await response.json();
    console.log(response);
    const feedContainer = document.getElementById("feed");
    // feedContainer.innerHTML = '';
    const esquerda = document.querySelector(".esquerda");
    const direita = document.querySelector(".direita");
    if (feedbacks.length > 0) {
      feedContainer.setAttribute("class", "container bg-green p-4 mb-2");
      //limpando erro de cards duplicados
      esquerda.innerHTML = ''
      direita.innerHTML =''
      feedbacks.forEach((feedback, indice) => {
        const card = FeedbackCard(feedback, indice);
        //  feedContainer.appendChild(card)

        if (indice % 2 == 0) {
          esquerda.appendChild(card);
        } else {
          direita.appendChild(card);
        }
        atualizarIcon();
        contador++;
      });
    }
    const feedbackId = numCurtidas.getAttribute("id");
    //identificando o feedback específico a ser atualizado
    const numCurtidasElement = espacoCurtidas.querySelector(`#${feedbackId}`);
    
    // Atualizando o número de curtidas localmente antes de chamar a API
    numCurtidasElement.innerHTML = `${Number(numCurtidasElement.innerHTML) + 1}`;
    
    // Chamando a função atualizarCurtidas passando feedbackId
    atualizarCurtidas(feedbackId);


  }




  function FeedbackCard(feedback, indice) {
    const card = document.createElement("div");
    card.setAttribute("class", "card bg-light pt-2 mb-4");
    card.setAttribute("id", `card${indice}`);

    const linha = document.createElement("div");
    linha.setAttribute("class", "row ps-3");
    card.appendChild(linha);

    const colunaCurtidas = document.createElement("div");
    colunaCurtidas.setAttribute(
      "class",
      "espaco-curtidas col-md-4 d-flex align-items-center flex-column"
    );

    const pNome = document.createElement("h5");
    pNome.setAttribute("class", "nome mb-3");
    pNome.innerHTML = `${feedback.nomePessoa}`;

    const span = document.createElement("span");
    span.setAttribute("class", "caixa bg-green p-3");
    span.setAttribute("style", "ax-width: 5rem; border-radius: 20px");
    span.setAttribute("id", "caixa");

    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-2x fa-regular fa-thumbs-up");
    icon.setAttribute("style", "color: #ffffff");
    span.appendChild(icon);

    const numCurtidas = document.createElement("p");
    numCurtidas.innerHTML = `${feedback.numCurtidas}`;
    numCurtidas.setAttribute("id", `curtida${indice}`);
    numCurtidas.setAttribute("class", `curtida`);
    numCurtidas.setAttribute("style", "margin: -2px;");

    const palavraCurtida = document.createElement("p");
    palavraCurtida.innerHTML = "Curtidas";

    colunaCurtidas.appendChild(pNome);
    colunaCurtidas.appendChild(span);
    colunaCurtidas.appendChild(numCurtidas);
    colunaCurtidas.appendChild(palavraCurtida);

    const colunaFeedback = document.createElement("div");
    colunaFeedback.setAttribute("class", "espaco-feedback col-md-7");

    const textFeedback = document.createElement("p");
    textFeedback.setAttribute("class", "feedback");
    textFeedback.setAttribute("id", `feedback${indice}`);
    textFeedback.innerHTML = `${feedback.feedback}`;
    colunaFeedback.appendChild(textFeedback);

    linha.appendChild(colunaCurtidas);
    linha.appendChild(colunaFeedback);

    return card;
  }

  const feedbackForm = document.getElementById("formulario");
  feedbackForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const categoriaInput = document.getElementById("categoria");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const descricaoInput = document.getElementById("descricao");
    const sugestaoInput = document.getElementById("sugestao");




    const novoFeedback = {
      categoria: categoriaInput.value,
      nomePessoa: nomeInput.value,
      email: emailInput.value,
      feedback: descricaoInput.value,
      sugestao: sugestaoInput.value,
      numCurtidas: 0,
    };

if(novoFeedback.nomePessoa == "" || novoFeedback.email == "" || novoFeedback.feedback == ""){

return -1

}


    const response = await fetch("/add-feedback", {
      method: "POST",
      body: JSON.stringify(novoFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      loadFeedbacks();
      feedbackForm.reset();
    } else {
      console.error("Erro ao adicionar feedback.");
    }
  });

  atualizarIcon();
  loadFeedbacks();
});



