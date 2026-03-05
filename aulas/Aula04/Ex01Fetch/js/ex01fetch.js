//vamos trazer os dados dos usuários do jsonplaceholder
//usando o método nativo fetch()
fetch('https://jsonplaceholder.typicode.com/users')
    //será gerado uma promisse
    //tenho os dez usuários no formato JSON

    //converter a resposta no formato JSON para um objeto do JS
    .then(response => response.json()) 

    //com o JSON convertido para objeto
    //vamos exibir as informações na página
    .then(usuario => {
        const todosUsuarios = document.getElementById('listaUsuarios');

        usuario.forEach(user => {
            const cadaUsuario = document.createElement('li');
            cadaUsuario.textContent = user.name + ' (' + user.email + ')';
            todosUsuarios.appendChild(cadaUsuario);
        });
    })
    .catch(error =>  {
        document.getElementById('listaUsuarios').textContent = 'Ocorreu um erro ao carregar os usuários.';
    });