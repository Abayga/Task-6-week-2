//8 Task

// let btn = document.querySelector('#btn')
// let event = new Event('click')
// btn.addEventListener('click', function(){
//     alert('Добро Пожаловать')
// })
// btn.dispatchEvent(event)


//9 Task

// let btn = document.querySelector('#btn')
// let body = document.querySelector('body')
// btn.addEventListener('click', function(){
//     body.style.backgroundColor = select.options[select.selectedIndex].value;
//     }
// )


//10 TAsk
// let h1 = document.querySelector('h1');
// let inp1 = document.querySelector('.inp1');

// let h2 = document.querySelector('h2');
// let inp2 = document.querySelector('.inp2');

// btn.addEventListener('click', function(event){
//     event.preventDefault()
// })

// inp1.addEventListener('change', function(event){
//     const regexp = /[а-яА-ЯёЁa-zA-Z]/
//     h1.innerText = event.target.value
//     let inpText = h1.innerText
//     let result
//     if(result = inpText.match(regexp)){
//     console.log(inpText)}
//     else{
//         alert("Ошибка, введите Имя")
//     }
// })
// inp2.addEventListener('change', function(event){
//     const regexp = /[а-яА-ЯёЁa-zA-Z]/
//     h2.innerText = event.target.value
//     let inpText = h2.innerText
//     let result
//     if(result = inpText.match(regexp)){
//         console.log(inpText)}
//         else{
//             alert("Ошибка, введите Фамилию")
//         }
// })


//11 Task

// let kvadrat = document.getElementById('kvadrat')
// let right = document.querySelector('.right')
// let left = document.querySelector('.left')

// right.addEventListener('click', function(){
//     kvadrat.style.transform += 'translateX(100px)'
// })
// left.addEventListener('click', function(event){
//     kvadrat.style.transform += 'translateX(-100px)'
// })



//12 Task
// document.addEventListener('mousemove', function(event){
//     console.log('X '+ event.clientX, 'Y ' + event.clientY)
// })



//To do list
// let btn = document.querySelector('#btn')
// let list = document.querySelector('.list')

// btn.addEventListener('click', function(event){
//     let Do1 = document.querySelector('.inp1').value;
//     let Do2 = document.querySelector('.inp2').value;
//     let Do3 = document.querySelector('.inp3').value;
//     event.preventDefault()

//     if( Do1 && Do2 && Do3){
//         list.innerText = 'Ваше 1 задание: ' + Do1
//         +'\n Ваше 2 задание: ' + Do2
//         +'\n Ваше 3 задание: ' + Do3
//     }
//     else{
//         alert("Введите все 3 задания")
//     }
// }
// )




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