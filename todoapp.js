let addButton=document.getElementById('addbutton');
let toDoContainer=document.getElementById('toDoContainer');
let input=document.getElementById('input');


addButton.addEventListener('click',function(){
    let paragraph=document.createElement('p');         //create a new paragraph element
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText=input.value;
    toDoContainer.appendChild(paragraph);             //append it to the end of the document body
    input.value="";                                  //so as input field will be blank after a task is inserted
    let btn_done=document.createElement("button");
    btn_done.innerHTML="Done";
    btn_done.classList.add('btn_done-styling');
    toDoContainer.appendChild(btn_done);
    let btn_delete=document.createElement("button");
    btn_delete.innerHTML="Delete";
    btn_delete.classList.add('btn_delete-styling');
    toDoContainer.appendChild(btn_delete);

    btn_done.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })

    btn_delete.addEventListener('click',function(){
        toDoContainer.removeChild(paragraph);
        toDoContainer.removeChild(btn_delete);
        toDoContainer.removeChild(btn_done);
    })

    
    
})