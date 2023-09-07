var body = document.querySelector('body')
var checkbox = document.getElementById('switch')

function init() {
    let mode = localStorage.getItem('mode') ? 'dark' : ''
    checkbox.checked = mode === 'dark' ? true : false
    body.setAttribute('class', mode)
}

init()
checkbox.addEventListener('change', () => {
    body.classList.toggle('dark')
    let mode = body.getAttribute('class') ? 'dark' : ''
    checkbox.checked = mode === 'dark' ? true : false
    localStorage.setItem('mode', mode)
})