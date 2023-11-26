



document.addEventListener('DOMContentLoaded', function () {
    
    
    
        buscarFeedback()
    
    
});


buscarFeedback = ()=>{
    const pesquisa = document.querySelector("#search_bar");
    // const feed = document.querySelector("#feed");
    // const cards = feed.querySelectorAll(".card");
    // const filtroSelect = document.querySelector(".form-select");
    // const comentarios = feed.querySelectorAll(".espaco-feedback");
    // const nomes = feed.querySelectorAll(".espaco-curtidas");

    pesquisa.addEventListener('input', () => {
    
        const feed = document.querySelector("#feed");
        const cards = feed.querySelectorAll(".card");
        const filtroSelect = document.querySelector(".form-select");
        const comentarios = feed.querySelectorAll(".espaco-feedback");
        const nomes = feed.querySelectorAll(".espaco-curtidas");
        if (filtroSelect.value == '1') {
            let pesquisaDigitado = pesquisa.value.trim().toLowerCase(); // Remover espaços extras e converter para minúsculas
            
            for (let i = 0; i < cards.length; i++) {
                let comentario = comentarios[i].textContent.trim().toLowerCase(); // Remover espaços extras e converter para minúsculas

                if (comentario.includes(pesquisaDigitado)) {
                    cards[i].style.display = 'block'; // Mostra o card
                } else {
                    cards[i].style.display = 'none'; // Oculta o card
                }
            }
        }
        else if (filtroSelect.value == '2') {
            let pesquisaDigitado = pesquisa.value.trim().toLowerCase(); // Remover espaços extras e converter para minúsculas
            
            for (let i = 0; i < cards.length; i++) {
                let nome = nomes[i].textContent.trim().toLowerCase(); // Remover espaços extras e converter para minúsculas

                if (nome.includes(pesquisaDigitado)) {
                    cards[i].style.display = 'block'; // Mostra o card
                } else {
                    cards[i].style.display = 'none'; // Oculta o card
                }
            }
            
        }
        else{
            const search_div = document.querySelector("#search_div") 
            let texto = "Selecione um filtro!"
            if (search_div.lastChild.innerHTML!= texto) {
                let textoHtml = document.createElement("p")
                textoHtml.innerHTML = texto
                textoHtml.setAttribute("class","alerta")
                search_div.append(textoHtml)
            }
            

        }
        
    });
}

