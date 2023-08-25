var eKey = document.querySelector('.card.key p:last-child')
var eLocation = document.querySelector('.card.location p:last-child')
var eWhich = document.querySelector('.card.which p:last-child')
var eCode = document.querySelector('.card.keycode p:last-child')
var alertBtn = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')


document.addEventListener('keydown', function(e) {
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerHTML = e.which

    alertBtn.classList.add('hide')

    box.classList.remove('hide')
})