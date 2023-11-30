
// Função para atualizar o ícone e o contador de curtidas ao clicar na caixa
function atualizarIcon() {
  const caixas = [...document.querySelectorAll(".caixa")];

  caixas.map((caixa) => {
    caixa.addEventListener("click", (e) => {
      e.preventDefault();
      const icone = caixa.querySelector("i");
      const espacoCurtidas = caixa.parentNode;
      const curtida = espacoCurtidas.querySelector("p.curtida");

      // Alternar entre os ícones de curtida vazia e cheia
      icone.classList.toggle("fa-regular");
      icone.classList.toggle("fa-solid");

      // Atualizar o contador de curtidas com base no ícone atual
      if (icone.classList.contains("fa-solid")) {
        curtida.innerHTML = `${Number(curtida.innerHTML) + 1}`;
      } else {
        curtida.innerHTML = `${Number(curtida.innerHTML) - 1}`;
      }
    });
  });
}

// Função para criar os elementos relacionados à curtida em um feedback
function criarElementosCurtida(objetofeedback, indice) {
  const pNome = document.createElement("h5");
  pNome.className = "nome mb-3";
  pNome.innerHTML = `${objetofeedback.nomePessoa}`;

  const span = document.createElement("span");
  span.className = "caixa bg-green p-3";
  span.style = "ax-width: 5rem; border-radius: 20px; cursor:pointer;";

  const icon = document.createElement("i");
  icon.className = "fa-2x fa-regular fa-thumbs-up";
  icon.style = "color: #ffffff";
  span.appendChild(icon);

  const numCurtidas = document.createElement("p");
  numCurtidas.innerHTML = `${objetofeedback.numCurtidas}`;
  numCurtidas.id = `curtida${indice}`;
  numCurtidas.className = "curtida";
  numCurtidas.style = "margin: -2px;";

  const palavraCurtida = document.createElement("p");
  palavraCurtida.innerHTML = "Curtidas";

  return [pNome, span, numCurtidas, palavraCurtida];
}

// Função para criar um card de feedback
function criarCard(objetofeedback, indice) {
  const card = document.createElement("div");
  card.className = "card bg-light pt-2 mb-4";
  card.id = `card${indice}`;

  const linha = document.createElement("div");
  linha.className = "row ps-3";
  card.appendChild(linha);

  const colunaCurtidas = document.createElement("div");
  colunaCurtidas.className = "espaco-curtidas col-md-4 d-flex align-items-center flex-column";

  // Criar elementos relacionados à curtida e adicionar à coluna de curtidas
  const elementosCurtida = criarElementosCurtida(objetofeedback, indice);
  colunaCurtidas.append(...elementosCurtida);

  const colunaFeedback = document.createElement("div");
  colunaFeedback.className = "espaco-feedback col-md-7";

  // Criar o texto do feedback e adicionar à coluna de feedback
  const textFeedback = document.createElement("p");
  textFeedback.className = "feedback";
  textFeedback.id = `feedback${indice}`;
  textFeedback.innerHTML = `${objetofeedback.feedback}`;
  colunaFeedback.appendChild(textFeedback);

  // Adicionar colunas ao card
  linha.append(colunaCurtidas, colunaFeedback);

  return card;
}

// Dados dos feedbacks

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
  

const listaDeFeedbacks2 = [objeto1, objeto2, objeto3, objeto4, objeto5, objeto6];


// Verificar se há feedbacks para exibir 
if (listaDeFeedbacks2.length > 0) {
    
    // Pegar o contêiner e trocar a cor de fundo para aparecer
  const container = document.querySelector("#feed");
  const titulo2 = document.querySelector(".tilulo2")
  titulo2.classList.remove("d-none");
  container.classList.remove("d-none");
  container.classList.add("bg-green");

  // Pegar as divs esquerda e direita para dentro da linha principal
  const esquerda = document.querySelector(".esquerda");
  const direita = document.querySelector(".direita");

  // Para cada feedback, criar um card e adicionar à esquerda ou direita
  listaDeFeedbacks2.map((objetofeedback, indice) => {
    const card = criarCard(objetofeedback, indice);
    (indice % 2 === 0 ? esquerda : direita).appendChild(card);
  });

  // Chamar a função de atualização do ícone
  atualizarIcon();
}





