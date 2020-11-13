let quantity = document.getElementById('input')
let a92 = document.querySelector('.btn92')
let a95 = document.querySelector('.btn95')
let a98 = document.querySelector('.btn98')
let price = document.getElementById('priceFor')
let result = document.getElementById('result')


a92.addEventListener('click',() => {
    let priceValue = 2.01
    removeBtn()
    price.innerText = `${priceValue}$`
    result.innerText = `${(priceValue * quantity.value).toFixed(2)}$`
    a95.classList.remove('active')
    a98.classList.remove('active')
    a92.classList.add('active')
})
a95.addEventListener('click',() => {
    let priceValue = 4.01
    removeBtn()
    price.innerText = `${priceValue}$`
    result.innerText = `${(priceValue * quantity.value).toFixed(2)}$`
    a92.classList.remove('active')
    a98.classList.remove('active')
    a95.classList.add('active')
})
a98.addEventListener('click',() => {
    let priceValue = 6.01

    removeBtn()
    price.innerText = `${priceValue}$`
    result.innerText = `${(priceValue * quantity.value).toFixed(2)}$`
    a92.classList.remove('active')
    a95.classList.remove('active')
    a98.classList.add('active')
})
function removeBtn(){

    document.querySelectorAll('.btnB').forEach((el)=>{
        el.classList.remove('active')
    })
}