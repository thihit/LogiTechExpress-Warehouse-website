document.addEventListener('DOMContentLoaded', ()=>{

    const passwordEye = Array.from(document.getElementsByClassName('password-icon'))

    passwordEye.forEach((element)=>{

        element.addEventListener('click', ()=>{

            const input = element.parentElement.querySelector('input')

           input.type = input.type === 'password' ? 'text' : 'password'

           element.classList.toggle('fa-eye')
           
    })    
    })




})

function menuShow(){
    let menuMobile =document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else{
        menuMobile.classList.add('open')
    }
}