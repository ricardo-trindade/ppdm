//vamos pegar o elemento button com id = alternarBotao
const elementoBotao = document.getElementById('alternarBotao');

//vamos pegar o elemento div com id = mensagem
const elementoDiv = document.getElementById('mensagem');

//vamos adicionar o método addEventListener para escutar
//o evento click
elementoBotao.addEventListener('click', function() {
    //1. vamos verificar se a mensagem está oculta
    if (elementoDiv.classList.contains('oculto')) {
        //vamos remover o estilo
        mensagem.classList.remove('oculto');
    } else {
        mensagem.classList.add('oculto');
    }
});