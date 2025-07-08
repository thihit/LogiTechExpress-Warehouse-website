window.addEventListener('DOMContentLoaded', ()=>{

    let saveBtn = document.getElementById("savebtn")


    saveBtn.addEventListener('click', (event)=>{
    event.preventDefault()


    let product = document.getElementById("product").value.trim()
    let quantity = document.getElementById("quantity").value
    let result = document.getElementById('result')
    const listContent = document.getElementById('listContent')
    
    let products = JSON.parse(localStorage.getItem('products')) ||[]
    
    if(product !== '' && !isNaN(quantity) && quantity > 0){
        const item = {
                        name: product,
                        quant: quantity
                    }

        products.push(item)
        localStorage.setItem('products', JSON.stringify(products))
        renderList()
        counting()
        result.style.display = 'block'
        console.log("Produto salvo: ", item)


    } else {
        alert("Preencha corretamente o nome e a quantidade do produto.")
    }             
})



    let list = document.getElementById('list')
    let add = document.getElementById('add')
    let countingP = document.getElementById('countingP')
    let formContainer = document.getElementById('formContainer')
    let listContainer = document.getElementById('listContainer')
    let cleanBtn = document.getElementById('cleanList')
    let numberOfProducts = document.getElementById('numberOfProducts')
    
    list.addEventListener('click', ()=>{
        formContainer.style.display = "none"
        listContainer.style.display = 'flex'
        countingP.style.display = 'none'

    })

    add.addEventListener('click', ()=>{
       formContainer.style.display = "flex"
       listContainer.style.display = 'none'
       countingP.style.display = 'flex' 
    })

    function renderList(){

        listContent.innerHTML = ''
        const listItem = JSON.parse(localStorage.getItem('products'))


        listItem.forEach((item)=>{

        const product = item.name
        const quant = item.quant 

        console.log(product)
        console.log(quant)
        
        const itemContent = document.createElement('li')

        itemContent.textContent = `${product}: ${quant}`

        listContent.appendChild(itemContent)
        })

       
    }

    cleanBtn.addEventListener('click', ()=>{
        localStorage.clear()
        listContent.innerHTML = ''
    })

    
    function counting(){
        const list = JSON.parse(localStorage.getItem('products'))
        numberOfProducts.textContent = list.length
        console.log(list.length)
    }

    counting()
    

    renderList()

})

 function menuShow(){
    let menuMobile =document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else{
        menuMobile.classList.add('open')
    }
}




