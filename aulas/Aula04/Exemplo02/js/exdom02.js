//vamos pegar a lista de produtos com id = lista
const elementoLista = document.getElementById('lista');

//vamos pegar o input com id = novoItem
const elementoInput = document.getElementById('novoItem');

//vamos pegar um elemento button com id = botaoAdicionar
const elementoBotao = document.getElementById('botaoAdicionar');

//vamos adicionar o método addEventListener
elementoBotao.addEventListener('click', function() {
   //vamos ler o produto digitado pelo usuário
   const novoProduto = elementoInput.value;

   //vamos fazer a validação do produto
   if (novoProduto !== "") {
        //1. Vamos criar um novo elemento li
        const novoItemElemento = document.createElement('li');

        //2. vamos definir o texto do novo elemento li
        novoItemElemento.textContent = novoProduto;

        //3. vamos inserir o li criado no ul
        elementoLista.appendChild(novoItemElemento);

        //4. vamos limpar o input
        elementoInput.value = '';
   }
});