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
let btn = document.querySelector('#btn')
let list = document.querySelector('.list')

btn.addEventListener('click', function(event){
    let Do1 = document.querySelector('.inp1').value;
    let Do2 = document.querySelector('.inp2').value;
    let Do3 = document.querySelector('.inp3').value;
    event.preventDefault()

    if( Do1 && Do2 && Do3){
        list.innerText = 'Ваше 1 задание: ' + Do1
        +'\n Ваше 2 задание: ' + Do2
        +'\n Ваше 3 задание: ' + Do3
    }
    else{
        alert("Введите все 3 задания")
    }
}
)
