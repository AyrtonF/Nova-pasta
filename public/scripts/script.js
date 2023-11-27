document.addEventListener("DOMContentLoaded", function () {
  let listaDeFeedbacks = [];
  let contador = 0;

 
  async function atualizarCurtidas(feedbackId) {
    try {
        const response = await fetch(`/update-curtidas/${feedbackId}`, {
            method: "PUT",
        });

        if (!response.ok) {
            console.error("Erro ao atualizar curtidas.");
        }
    } catch (error) {
        console.error("Erro ao processar requisição:", error);
    }
}




function atualizariconIndividual(item){
    item.addEventListener("click",()=>{
      const espacoCurtidas = item.parentNode;
      const curtida = espacoCurtidas.querySelector("p.curtida");
      const icone = item.querySelector("i");
      icone.classList.toggle("fa-regular");
      icone.classList.toggle("fa-solid");

      if (icone.classList.contains("fa-solid")) {
        curtida.innerHTML = `${Number(curtida.innerHTML) + 1}`;
      } else {
        curtida.innerHTML = `${Number(curtida.innerHTML) - 1}`;
      }
    })
}
/*   function atualizarIcon() {
    const caixas = [...document.querySelectorAll(".caixa")];
   
    caixas.map((caixa) => {
      caixa.addEventListener("click", (e) => {
        e.preventDefault();
        const icone = caixa.querySelector("i");
        
        const espacoCurtidas = caixa.parentNode;
        const curtida = espacoCurtidas.querySelector("p.curtida");
        icone.classList.toggle("fa-regular");
        icone.classList.toggle("fa-solid");
        
        if (icone.classList.contains("fa-solid")) {
          curtida.innerHTML = `${Number(curtida.innerHTML) + 1}`;
        } else {
          curtida.innerHTML = `${Number(curtida.innerHTML) - 1}`;
        }
        
      });
    });
  }; */
 
  async function loadFeedbacks() {
    
    const response = await fetch("/feedbacks");
    const feedbacks = await response.json();
    listaDeFeedbacks = [];
    
    feedbacks.forEach((feedback) => {
      listaDeFeedbacks.push(feedback);
    });
    listaDeFeedbacks.push(feedbacks)
    
    
    const feedContainer = document.getElementById("feed");
    
    
    const esquerda = document.querySelector(".esquerda");
    const direita = document.querySelector(".direita");
    let controlador = 0

    if (listaDeFeedbacks.length > 0) {
      
      feedContainer.setAttribute("class", "container bg-green p-4 mb-2");
      // esquerda.innerHTML = ''
      // direita.innerHTML = ''
      listaDeFeedbacks.forEach((item, indice) => {
        if(!Array.isArray(item)){
        const card = FeedbackCard(item, indice);
        //  feedContainer.appendChild(card)
        
        if (indice % 2 == 0) {
         
         esquerda.appendChild(card);

          
          controlador++
        } else {
          direita.appendChild(card);
          
          controlador++
        }
        const selecao = card.querySelector(".row .espaco-curtidas .caixa")
        //atualizarIcon();
        atualizariconIndividual(selecao)
        contador++;
      }
      });


     
    }
   
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
    span.setAttribute("id", `caixa${indice}`);
    

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
      //Olhar depois
      
    } else {
      console.error("Erro ao adicionar feedback.");
    }
  });

 
  loadFeedbacks();
});



