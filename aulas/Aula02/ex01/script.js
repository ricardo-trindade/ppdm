const exemploArrayLitralDiv = document.getElementById('exemplo-array-literal');

const frutas = ['maçã', 'uva', 'banana'];

exemploArrayLitralDiv.innerHTML = `
    <h2>Exemplo de array com literal</h2>
    <p>Array: [ ${frutas[1]} ] </p>
    `;

    const exemploArrayAcessoDiv = document.getElementById('exemplo-array-acesso');

    const numeros = [1, 2, 3, 4, 5];

    const primeiroElemento = numeros[0];
    const segundoElemento = numeros[1];
    const terceiroElemento = numeros[2];
    const quartoElemento = numeros[3];
    const quintoElemento = numeros[4];

    exemploArrayAcessoDiv.innerHTML = `
        <h2>Exemplo de acesso aos elementos do array</h2>
        <p>Primeiro elemento: ${ primeiroElemento }</p>
        <p>Primeiro elemento: ${ segundoElemento }</p>
        <p>Primeiro elemento: ${ terceiroElemento }</p>
        <p>Primeiro elemento: ${ quartoElemento }</p>
        <p>Primeiro elemento: ${ quintoElemento }</p>
    `;

    const exemploArrayModificadoDiv = document.getElementById('exemplo-array-modificado');

    const cores = ['azul','amarelo','verde'];

    cores[0] = 'rosa';

    exemploArrayModificadoDiv.innerHTML = `
        <h2>Exemplo de array modificado</h2>
        <p>Array: [ ${cores} ]</p>
    `
