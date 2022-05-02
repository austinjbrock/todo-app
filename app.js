let taskStack = document.getElementById('task-stack')
const addBtn = document.getElementById('add-btn')
let listItems = []
const listInput = document.getElementById('list-input')

function addTask (){
    let li = document.createElement('li')   
    for(let i =0; i <listItems.length;i++){
    li.textContent= `${listItems[i]}`
}
taskStack.appendChild(li)
}//End AddTask

 addBtn.addEventListener('click', function(){
    if(listInput.value) {
    listItems.push(listInput.value) 
    listInput.value = ''
    addTask()
    }
})
