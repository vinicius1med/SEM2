const enviar = document.getElementById('btnInserir');

function inserirContato(){
    const contact = {
    name: document.getElementById('textNome').value,
    fone: document.getElementById('textFone').value
    }

    const bd_contacts = getLocalStorage();

    //tratar erro aq
    bd_contacts.push(contact);
    console.log(bd_contacts);
    
    //armazena os dados no local storage
    setLocalStorage(bd_contacts);

    //atualiza a tabela antes depois da insercao
    updateTable();
}
// --------------------------STORAGE-------------------------------
function getLocalStorage() {
    return JSON.parse(localStorage.getItem('bd_contacts'));
}
// ----------------------------------------------------------------
function setLocalStorage(bd_contacts) {
    localStorage.setItem('bd_contacts', JSON.stringify(bd_contacts));
}
// ----------------------------------------------------------------

// ----------------------------------------------------------------

// ----------------------------------------------------------------

// ---------------------------TABLE--------------------------------
function updateTable() {
    //clean table

    const bd_contacts = getLocalStorage();

    bd_contacts.forEach(newRow)
}

// ----------------------------------------------------------------
function newRow(contact, index) {
    const line = document.createElement('tr');
    line.innerHTML = `
        <td>${index}</td>
        <td>${contact.name}</td>
        <td>${contact.fone}</td>
        <td><button>Delete</button></td>
    `

    document.querySelector('#tbContacts>tbody').appendChild(line)
    }


// ----------------------------------------------------------------
