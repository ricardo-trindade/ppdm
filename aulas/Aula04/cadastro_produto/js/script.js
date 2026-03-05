document.addEventListener("DOMContentLoaded", function() {
    const productForm = document.getElementById("productForm");
    const nameInput = document.getElementById("nome");
    const priceInput = document.getElementById("preco");
    const availabilitySelect = document.getElementById("disponibilidade");
    const produtoTable = document.querySelector("#produtoTable tbody");
    const cancelarBtn = document.getElementById("cancelar");

    let editing = false;
    let editId = null;

    function getProdutos() {
        const produtos = localStorage.getItem("produtos");
        return produtos ? JSON.parse(produtos) : [];
    }

    function saveProdutos(produtos) {
        localStorage.setItem("produtos", JSON.stringify(produtos));
    }

    function renderProdutos() {
        // limpa linhas existentes
        produtoTable.innerHTML = "";

        const produtos = getProdutos();
        if (produtos.length === 0) {
            const row = produtoTable.insertRow();
            const cell = row.insertCell(0);
            cell.colSpan = 4;
            cell.textContent = "Nenhum produto cadastrado.";
            cell.style.textAlign = "center";
            return;
        }

        produtos.forEach(produto => {
            const row = produtoTable.insertRow();

            const nomeCell = row.insertCell(0);
            nomeCell.textContent = produto.nome;

            const precoCell = row.insertCell(1);
            precoCell.textContent = produto.preco;

            const disponibilidadeCell = row.insertCell(2);
            disponibilidadeCell.textContent = produto.disponibilidade;
            disponibilidadeCell.classList.add(
                produto.disponibilidade === "disponivel" ? "disponivel" : "indisponivel"
            );

            const actionCell = row.insertCell(3);
            const editBtn = document.createElement("button");
            editBtn.textContent = "Editar";
            editBtn.onclick = function() {
                editarProduto(produto);
            };
            actionCell.appendChild(editBtn);

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Excluir";
            deleteBtn.onclick = function() {
                excluirProduto(produto.id);
            };
            actionCell.appendChild(deleteBtn);
        });
    }

    function excluirProduto(id) {
        const produtos = getProdutos().filter(p => p.id !== id);
        saveProdutos(produtos);
        renderProdutos();
    }

    function editarProduto(produto) {
        nameInput.value = produto.nome;
        priceInput.value = produto.preco;
        availabilitySelect.value = produto.disponibilidade;
        editing = true;
        editId = produto.id;
    }

    productForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const produto = {
            nome: nameInput.value.trim(),
            preco: priceInput.value,
            disponibilidade: availabilitySelect.value
        };

        if (editing) {
            const produtos = getProdutos().map(p => (p.id === editId ? { ...p, ...produto } : p));
            saveProdutos(produtos);
            editing = false;
            editId = null;
        } else {
            produto.id = Date.now();
            const produtos = getProdutos();
            produtos.push(produto);
            saveProdutos(produtos);
        }

        productForm.reset();
        renderProdutos();
    });

    cancelarBtn.addEventListener("click", function() {
        editing = false;
        editId = null;
        productForm.reset();
    });

    renderProdutos();
});