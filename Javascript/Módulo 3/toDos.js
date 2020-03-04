const listElement = document.querySelector('#app ul');
const inputElement = document.querySelector('#app input');
const buttonElement = document.querySelector('#app button');

const toDos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
    listElement.innerHTML = '';
    for (toDo of toDos) {
        const toDoElement = document.createElement('li');
        const toDoText = document.createTextNode(toDo+' ');
        const linkElement = document.createElement('a');
        const linkText = document.createTextNode('excluir');
        const pos = toDos.indexOf(toDo);
        linkElement.setAttribute('href','#');
        linkElement.setAttribute('onclick',`deleteToDo(${pos})`)
        linkElement.appendChild(linkText);
        toDoElement.appendChild(toDoText);
        toDoElement.appendChild(linkElement);
        listElement.appendChild(toDoElement);
    }
}

renderTodos();

function addToDo() {
    const toDoText = inputElement.value;
    toDos.push(toDoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}
function logkey(k) {
    if (k.code == 'Enter') addToDo();
}

function deleteToDo(pos){
    toDos.splice(pos,1);
    renderTodos();
    saveToStorage();
}
function saveToStorage(){
    localStorage.setItem('list_todos',JSON.stringify(toDos))
}
buttonElement.onclick = addToDo;
inputElement.onkeypress = logkey;
document.onfocus = inputElement.focus();