const listaTabela = document.getElementById('tbContacts');
// const botaoInserir = document.getElementById('btnInserir');
// console.log(botaoInserir);

let listaPessoa = [];
let idCounter = 1;

function cadastrarPessoa() {
    const pessoa = {
        id: idCounter++,
        nome: document.getElementById('textNome').value,
        telefone: document.getElementById('textFone').value,
    }
    listaPessoa.push(pessoa)
    // console.log(listaPessoa)
    updateList()
}

// botaoInserir.addEventListener("click", cadastrarPessoa())

function updateList() {
    listaTabela.innerHTML = `
    <thead>
        <th scope="col">ID</th>
        <th scope="col">Nome</th>
        <th scope="col">Telefone</th>
        <th scope="col">Ação</th>
    </thead>
    <tbody>
        ${
            listaPessoa.map((pessoa) => {
                return `
            <tr>
                <td>${pessoa.id}</td>
                <td>${pessoa.nome}</td>
                <td>${pessoa.telefone}</td>
                <td><button onClick='excluir(${pessoa.id})'>Excluir</button></td>
            </tr>
                `
            }).join('')
        }
    </tbody>
    `;
}

function excluir(id) {
    listaPessoa = listaPessoa.filter(pessoa => pessoa.id !== id);
    updateList();
}