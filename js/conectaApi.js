async function listaVideos(){
    const conexao = await fetch('http://localhost:5500/videos');
    const conexaoConvertida = await conexao.json();
        return conexaoConvertida;
}

async function criaVideos(titulo,descricao,url,imagem){
    const conexao = await fetch('http://localhost:5500/videos',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} "mil visualizações"`,
            url: url,
            imagem : imagem
        })
    });

    if(!conexao.ok) {
        throw new Error("Não foi possível enviar o video");
    }
}

async function buscaVideo(termoBusca){
    const conexao = await fetch(`http://localhost:5500/videos?q=${termoBusca}`)
    const conexaoConvertida = conexao.json();
    return conexaoConvertida; 
}

export const conectApi ={
    listaVideos,
    criaVideos,
    buscaVideo
}