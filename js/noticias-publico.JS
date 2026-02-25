document.addEventListener("DOMContentLoaded", function(){

    const lista = document.getElementById("listaNoticias");
    let noticias = JSON.parse(localStorage.getItem("noticias")) || [];

    if(noticias.length === 0){
        lista.innerHTML = "<p style='text-align:center;'>Nenhuma notícia publicada ainda.</p>";
        return;
    }

    noticias.forEach((n)=>{

        // Criar prévia do texto
        let previa = n.conteudo.length > 120 
            ? n.conteudo.substring(0,120) + "..." 
            : n.conteudo;

        let card = document.createElement("div");
        card.classList.add("card-noticia");

        card.innerHTML = `
            <img src="${n.imagem}">
            <div class="conteudo-noticia">
                <h2>${n.titulo}</h2>
                <p>${previa}</p>
            </div>
        `;

        lista.appendChild(card);
    });

});