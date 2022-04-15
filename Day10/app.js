var input = document.querySelector('.form input');
var Addbutton = document.querySelector('.form button');

var form = document.querySelector('.form')
var todos = document.querySelector('.todos')
var newData;
form.addEventListener('submit', function(e){
    e.preventDefault();
    newData = input.value.trim();
    if(newData){
        addTodo({
            text: newData,
            status: 'active'
        })

        saveTodos();
    }

    input.value = '';
})

function addTodo(element){



    // <li>
    //     <span>Test</span>
    //     <i class="fa-solid fa-trash"></i>
    // </li>
    var li = document.createElement('li');
    li.innerHTML = `
    <span>${element.text}</span>
    <i class="fa-solid fa-trash"></i>
    `;

    if(element.status === 'done' )
        li.setAttribute('class', 'done');

    li.addEventListener('click', function(){
        
        this.classList.toggle('done');
        saveTodos();
        
    })

    li.querySelector('i').addEventListener('click', function(){
        this.parentElement.remove();
        saveTodos();
    })

    
    todos.appendChild(li);
    
}

function saveTodos(){
    let todosNode = document.querySelectorAll('li');
    let todoStorage = [];

    todosNode.forEach(function(item){
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

         todoStorage.push({
            text,
            status
        })
    });

    localStorage.setItem('todos', JSON.stringify(todoStorage));

}

function init(){
    let data =JSON.parse( localStorage.getItem('todos'));

    data.forEach(function(item){
        addTodo(item);
    })
}

init();