// const botaoInserir = document.querySelector(".btnInserir")
const tabelaContatos = document.querySelector("#tbContacts")
const btnInserir = () => {
    addContato()
}

let listaContatos = []
let idCounter = 1;

// botaoInserir.addEventListener("click", addContato ())

function addContato () {
    const contato = {
        id: idCounter++,
        nome: document.querySelector("#textNome").value,
        telefone: document.querySelector("#textTelefone").value,
    }
    listaContatos.push(contato)
    setLocalStorage()

    updateList()
}

function setLocalStorage () {
    localStorage.setItem("contato", JSON.stringify(listaContatos))
}

function getLocalStorage () {
    return JSON.parse(localStorage.getItem("contato"))
}

function updateList () {
    const contatos = getLocalStorage();
    tabelaContatos.innerHTML = "";

    tabelaContatos.innerHTML = `
    <table id="tbContacts">
        <thead>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Ação</th>
        </thead>
        <tbody></tbody>
    </table>
    `

    const tableBody = tabelaContatos.querySelector('tbody');

    contatos.forEach(contato => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `
            <td>${contato.id}</td>
            <td>${contato.nome}</td>
            <td>${contato.telefone}</td>
            <td>
                <button onclick="removerContato(${contato.id})">X</button>
            </td>      
        `
    });
}

function removerContato(id) {
    // Filtra a lista de contatos para remover o contato com o ID correspondente
    listaContatos = listaContatos.filter(contato => contato.id !== id);
    
    // Atualiza o localStorage
    setLocalStorage();

    // Atualiza a lista na tabela
    updateList();
}



