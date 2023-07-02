const input = document.querySelector('.input');
const addBtn = document.querySelector('.btn-add');
const list = document.querySelector('.list');

const notes = [
    {
        title: 'Первая заметка',
        completed: false,
    },
    {
        title: 'Вторая заметка',
        completed: false,
    }
]

function createHtml(note, index){
    return `
    <li class = "item">
        <span class="item-text ${note.completed ? 'item-done' : ''}">${note.title}</span>
        <span class = "btn-box">
            <span class="btn-done" data-type="toggle" data-index="${index}">Done</span>
            <span class="btn-remove" data-type = "delete" data-index="${index}">Remove</span>
        </span>
    </li>`;
}

function render() {
    list.innerHTML = '';
    for (let i = 0; i < notes.length; i++){
        list.insertAdjacentHTML('beforeend', createHtml(notes[i], i) );
    }
}

render();

addBtn.addEventListener('click', function() {
    if (input.value.length === 0){
        return;
    }
    let newNote = {
        title: input.value,
        completed: false,
    }
    notes.push(newNote);
    render();
    input.value = '';
})

list.addEventListener('click', function(e) {
    const noteIndex = parseInt(e.target.dataset.index);
    const noteType = e.target.dataset.type;
    if (noteType === "toggle"){
        notes[noteIndex].completed = !notes[noteIndex].completed; 
    }
    if (noteType === "delete"){
        notes.splice(notes[noteIndex],1);
    }
    render();
})
