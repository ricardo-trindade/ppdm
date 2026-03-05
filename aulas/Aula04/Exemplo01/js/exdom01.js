//vamos pegar o elemento h1 com id = titulo
const texto = document.getElementById('titulo');

//vamos pegar o elemento button com id = botao
const elementoBotao = document.getElementById('botao');

//Manipulador de eventos método addEventListener
elementoBotao.addEventListener('click', function() {
    //vamos altera o texto do elemento h1 para Texto Alterado
    texto.textContent = 'Texto Alterado';
});

