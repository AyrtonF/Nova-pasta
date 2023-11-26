// atualizarIcon = ()=>{
//     [...document.querySelectorAll(".caixa")].forEach(caixa => {
//         caixa.addEventListener("click", (e) => {
//             e.preventDefault()
//             const icone = caixa.querySelector("#icone")
//             icone.classList.toggle("fa-regular")
//             icone.classList.toggle("fa-solid")
//             console.log(icone)
//         })
//     })
// }

atualizarIcon=() =>{
  const caixas = [...document.querySelectorAll(".caixa")];
  
  caixas.map((caixa) => {
    caixa.addEventListener("click", (e) => {
      e.preventDefault();
      const icone = caixa.querySelector("i");
      const espacoCurtidas = caixa.parentNode
      const curtida = espacoCurtidas.querySelector("p.curtida")
      icone.classList.toggle("fa-regular");
      icone.classList.toggle("fa-solid");
  
      if(icone.classList.contains("fa-solid")){
        curtida.innerHTML = `${Number(curtida.innerHTML)+1}`
 
      } else{
        curtida.innerHTML = `${Number(curtida.innerHTML)-1}`
      
      }
   
      
    });
  });
}






const objeto1 = {
    nomePessoa: "Carlos Silva",
    nomeMaquineta: "Maquineta X",
    numCurtidas: 15,
    feedback: "Estou muito satisfeito com a Maquineta X! É fácil de usar e eficiente. Recomendo a todos."
  };
  
  const objeto2 = {
    nomePessoa: "Ana Souza",
    nomeMaquineta: "Maquineta Y",
    numCurtidas: 12,
    feedback: "A Maquineta Y é boa, mas poderia ter uma melhor interface. No entanto, o suporte ao cliente é excelente."
  };
  
  const objeto3 = {
    nomePessoa: "Rafael Oliveira",
    nomeMaquineta: "Maquineta Z",
    numCurtidas: 18,
    feedback: "Estou impressionado com a qualidade do serviço da Empresa Z Maquinetas. A maquineta deles é confiável e o atendimento ao cliente é rápido."
  };
  
  const objeto4 = {
    nomePessoa: "Larissa Santos",
    nomeMaquineta: "Maquineta ABC",
    numCurtidas: 20,
    feedback: "A Maquineta ABC superou minhas expectativas! A velocidade de transação é incrível e o design é moderno. Estou muito feliz com minha escolha."
  };
  
  const objeto5 = {
    nomePessoa: "Pedro Lima",
    nomeMaquineta: "Maquineta XYZ",
    numCurtidas: 25,
    feedback: "Tive uma ótima experiência com a Empresa de Maquinetas XYZ. O equipamento deles é estável e o suporte técnico é prestativo. Definitivamente, voltarei a fazer negócios com eles."
  };
  
  const objeto6 = {
    nomePessoa: "Renato Cariani",
    nomeMaquineta: "Maquineta WPY",
    numCurtidas: 50,
    feedback: "Tive uma ótima experiência com a Empresa de Maquinetas XYZ. O equipamento deles é estável e o suporte técnico é prestativo. Definitivamente, voltarei a fazer negócios com eles."
  };
  

  // const listaDeFeedbacks = [objeto1, objeto2, objeto3, objeto4, objeto5, objeto6];
  
if (listaDeFeedbacks.length > 0) {
    //pegar conteiner e trocar a cor de fundo para aparecer
    const container = document.querySelector("#feed")
    container.classList.add("bg-green")

    // criar linha principal com suas classes e adicionar ao container
    const linhaPrincipal = document.createElement("div")
    linhaPrincipal.setAttribute("class","row linha-principal")
    container.appendChild(linhaPrincipal)

    // criando div esquerda e direita para dentro da linha principal
    const esquerda = document.createElement("div")
    const direita = document.createElement("div")

    esquerda.setAttribute("class","col-md-6 esquerda")
    direita.setAttribute("class","col-md-6 direita")

    linhaPrincipal.appendChild(esquerda)
    linhaPrincipal.appendChild(direita)


    listaDeFeedbacks.map((objetofeedback, indice)=>{
        //criando card
        const card = document.createElement("div")
        card.setAttribute("class","card bg-light pt-2 mb-4")
        card.setAttribute("id",`card${indice}`)
        if (indice % 2 == 0) {
            esquerda.appendChild(card)
        }else{
            direita.appendChild(card)
        }
        
        //criando linha do card e adicionando ao card

        const linha = document.createElement("div")
        linha.setAttribute("class","row ps-3")
        card.appendChild(linha)

        //criando coluna das curtidas (esquerda)

        const colunaCurtidas = document.createElement("div")
        colunaCurtidas.setAttribute("class","espaco-curtidas col-md-4 d-flex align-items-center flex-column")
        
        
        //criando nome da pessoa no card e adicionando a coluna de curtidas
        const pNome = document.createElement("h5")
        pNome.setAttribute("class","nome mb-3")
        pNome.innerHTML = `${objetofeedback.nomePessoa}`
        // criando span
        const span = document.createElement("span")
        span.setAttribute("class","caixa bg-green p-3")
        span.setAttribute("style","ax-width: 5rem; border-radius: 20px")
        span.setAttribute("id","caixa")
        // criando icone
        const icon = document.createElement("i")
        icon.setAttribute("class","fa-2x fa-regular fa-thumbs-up")
        icon.setAttribute("style","color: #ffffff")
        span.appendChild(icon)

        //numero de curtidas

        const numCurtidas = document.createElement("p")
        numCurtidas.innerHTML = `${objetofeedback.numCurtidas}`
        numCurtidas.setAttribute("id",`curtida${indice}`)
        numCurtidas.setAttribute("class",`curtida`)
        numCurtidas.setAttribute("style","margin: -2px;")

        const palavraCurtida = document.createElement("p")
        palavraCurtida.innerHTML = "Curtidas"



        colunaCurtidas.appendChild(pNome)
        colunaCurtidas.appendChild(span)
        colunaCurtidas.appendChild(numCurtidas)
        colunaCurtidas.appendChild(palavraCurtida)
        


         //criando coluna do feedback (direita)

         const colunaFeedback = document.createElement("div")
         colunaFeedback.setAttribute("class","espaco-feedback col-md-7")
        //criando texto e adicionando a coluna de feedback
         const textFeedback = document.createElement("p")
         textFeedback.setAttribute("class","feedback")
         textFeedback.setAttribute("id",`feedback${indice}`)
         textFeedback.innerHTML = `${objetofeedback.feedback}`
         colunaFeedback.appendChild(textFeedback)

         //adicionando as duas colunas ao card
         linha.appendChild(colunaCurtidas)
         linha.appendChild(colunaFeedback)

    })
    atualizarIcon()
}


//Validação do formulário


