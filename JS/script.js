
//To do list Pro
let btn = document.querySelector('.btn')
let inp = document.querySelector('.inp')
let list = document.querySelector('.list')

btn.addEventListener('click', function(){
    if(inp.value){
        let id = Date.now()

        let btnDelete = document.createElement('button')
        btnDelete.classList.add('btn-delete')
        btnDelete.innerText = 'Удалить'
        btnDelete.setAttribute('onclick', `deleteTask(${id})`)

        let item = document.createElement('li')
        item.classList.add( `item-${id}`)
        item.setAttribute('onclick', `changeStatus(${id}, event)`)
        item.innerText = inp.value

        item.appendChild(btnDelete)

        list.appendChild(item)
        
        inp.value = ''
    }
    else{
        alert('Заполните поле')
    }
})

changeStatus = (id, event) => {
    if(event.target.className === 'btn-delete') return
    let item = document.querySelector(`.item-${id}`)
    item.classList.toggle('completed')
}

deleteTask = (id) => {
    let elem = document.querySelector(`.item-${id}`)
    elem.parentNode.removeChild(elem)
}