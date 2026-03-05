const loadingElement = document.getElementById('loading');
const produtoElement = document.getElementById('produto');
const errorElement = document.getElementById('error');  

fetch('https://fakestoreapi.com/products/1') //busca o produto de id 1
    .then(response => { //verifica se a resposta foi bem-sucedida
        if (!response.ok) { //se não for, lança um erro
            throw new Error('Deu erro ao buscar os dados: ' + response.status); //exibe o status do erro
        } 
        return response.json(); //converte a resposta para JSON
    })
    .then(data => { //exibe os dados do produto
        loadingElement.style.display = 'none'; //oculta a msg carregando produto
        produtoElement.innerHTML = ` 
            <h2>${data.title}</h2>
            <p>${data.description}</p>
            <img src="${data.image}" alt="${data.title}">
        `;
    })
    .catch(error => { //exibe a mensagem de erro
        loadingElement.style.display = 'none'; //oculta a msg carregando produto
        errorElement.textContent = error.message; //exibe a mensagem de erro
    }); 