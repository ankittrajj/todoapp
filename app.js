let submitbtn = document.getElementById('submitbtn');
let inputtext = document.getElementById('input-text');
let todo = document.getElementById('todo-container');
let clearbtn = document.getElementById('clear-btn');
let delbtn =document.getElementById('deletebtn');

submitbtn.addEventListener('click',()=>{
    let paragraph = document.createElement('p');
    paragraph.innerText=inputtext.value;
    todo.appendChild(paragraph);
    paragraph.classList.add('paragraph')
    inputtext.value='';
    todo.appendChild(delbtn);



    clearbtn.addEventListener('click',()=>{
        todo.removeChild(paragraph);
        todo.removeChild(delbtn);
    });

    delbtn.addEventListener('click',()=>{
        delbtn.removeChild('p');
    
    })
});

