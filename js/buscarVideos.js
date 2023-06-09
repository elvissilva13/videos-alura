import { conectApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscaVideos(evento){
    evento.preventDefault();

    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(elemento  => lista.appendChild(constroiCard(elemento.titulo,elemento.descricao,elemento.url,elemento.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem videos com esse termo</h2>`
    }

}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", evento => buscaVideos(evento));