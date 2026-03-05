const fotogatoElement = document.getElementById('fotogato');
const buscarfatoElement = document.getElementById('buscarfato');

async function buscarGato() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        const dados = await response.json();
        fotogatoElement.textContent = dados.fact;
    } catch (error) {
        fotogatoElement.textContent = 'Erro ao buscar fato do gato';
    }
}

buscarfatoElement.addEventListener('click', buscarGato); // Adiciona um evento de clique ao botão para buscar um novo fato do gato
buscarGato(); // Chama a função para buscar um fato do gato ao carregar a página







