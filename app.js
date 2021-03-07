let submitbtn = document.getElementById('submitbtn');
let inputtext = document.getElementById('input-text');
let todo = document.getElementById('todo-container');
let clearbtn = document.getElementById('clear-btn');

submitbtn.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    paragraph.innerText=inputtext.value;
    todo.appendChild(paragraph);
    paragraph.classList.add('paragraph')
    inputtext.value=''
    // paragraph.style.color='red';

    clearbtn.addEventListener('click',()=>{
        todo.removeChild(paragraph);
        inputtext.removeChild();
    })

})