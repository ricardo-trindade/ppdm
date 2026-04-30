// Aguarda o DOM (HTML) ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // Seleciona elementos HTML importantes
    const produtoForm    = document.getElementById('produtoForm');
    const produtoTable   = document.getElementById('produtoTable').getElementsByTagName('tbody')[0]; // Pega o tbody
    const produtoIdInput = document.getElementById('produtoId');
    const cancelarBtn    = document.getElementById('cancelar');

    // Variável para rastrear se estamos editando um produto existente
    let editing = false;

    // Função para obter todos os produtos do LocalStorage
    function getProdutos() {
        const produtos = localStorage.getItem('produtos');
        return produtos ? JSON.parse(produtos) : [];
    }

    // Função para salvar os produtos no LocalStorage
    function salvarProdutos(produtos) {
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    // Função para exibir os produtos na tabela
    function exibirProdutos() {
        produtoTable.innerHTML = ''; // Limpa a tabela antes de exibir os produtos
        const produtos = getProdutos();

        for (let i = 0; i < produtos.length; i++) {
            const produto = produtos[i];

            // Cria uma nova linha na tabela
            const row = produtoTable.insertRow();

            // Insere as células com os dados do produto
            const nomeCell = row.insertCell();
            nomeCell.textContent = produto.nome;

            const precoCell = row.insertCell();
            precoCell.textContent = 'R$ ' + produto.preco.toFixed(2); // Formata o preço

            const disponibilidadeCell = row.insertCell();
            disponibilidadeCell.textContent = produto.disponibilidade;
            disponibilidadeCell.classList.add(produto.disponibilidade === 'Disponível' ? 'disponivel' : 'indisponivel'); 
            // Adiciona classe para estilo

            const actionsCell = row.insertCell();

            // Cria botões de Editar e Excluir
            const editarBtn = document.createElement('button');
            editarBtn.textContent = 'Editar';
            editarBtn.onclick = () => editarProduto(i); // Passa o índice do produto
            actionsCell.appendChild(editarBtn);

            const excluirBtn = document.createElement('button');
            excluirBtn.textContent = 'Excluir';
            excluirBtn.onclick = () => excluirProduto(i); // Passa o índice do produto
            actionsCell.appendChild(excluirBtn);
        }
    }

    // Função para adicionar um novo produto ou atualizar um existente
    produtoForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const preco = parseFloat(document.getElementById('preco').value);
        const disponibilidade = document.getElementById('disponibilidade').value;
        const produtoId = produtoIdInput.value;

        if (nome && !isNaN(preco)) { // Valida se o nome não está vazio e o preço é um número
            const produtos = getProdutos();

            if (editing) {
                // Atualiza o produto existente
                produtos[produtoId].nome = nome;
                produtos[produtoId].preco = preco;
                produtos[produtoId].disponibilidade = disponibilidade;
                editing = false;
            } else {
                // Adiciona um novo produto
                produtos.push({ nome: nome, preco: preco, disponibilidade: disponibilidade });
            }

            salvarProdutos(produtos); // Salva a lista atualizada
            exibirProdutos(); // Atualiza a tabela
            produtoForm.reset(); // Limpa o formulário
            produtoIdInput.value = ''; // Limpa o ID
        } else {
            alert('Por favor, preencha o nome e o preço corretamente.');
        }
    });

    // Função para preparar o formulário para edição
    function editarProduto(index) {
        editing = true;
        const produtos = getProdutos();
        const produto = produtos[index];

        document.getElementById('nome').value = produto.nome;
        document.getElementById('preco').value = produto.preco;
        document.getElementById('disponibilidade'). value = produto.disponibilidade;
        produtoIdInput.value = index; 

        //vamos mostrar o botao cancelar
        cancelarBtn.style.display = 'inline-block';
    }

    // Função para excluir um produto
    function excluirProduto(index) {
        if(confirm('Tem certeza que deseja excluir este produto?')){
            const produtos = getProdutos();
            produtos.splice(index, 1);
            salvarProdutos(produtos);
            exibirProdutos();
        }        
    }

    // Evento para cancelar a edição
    cancelarBtn.addEventListener('click', function() {
        editing = false;
        produtoForm.reset();
        produtoIdInput.value = '';
        cancelarBtn.style.display = 'nome';        
    });

    // Esconde o botão de cancelar inicialmente
    cancelarBtn.style.display = 'none';

    // Exibe os produtos ao carregar a página
    exibirProdutos();
});