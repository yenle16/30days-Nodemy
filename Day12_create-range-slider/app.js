var process = document.querySelector('.process')
var range = document.querySelector('.range')
var value = document.querySelector('.process span')

function updateProcess(percent) {
    process.style.width = `${percent}%`
}

range.addEventListener('mouseover', function(e) {
    processWidth = (e.pageX - this.offsetLeft)
    var percent = Math.round(processWidth / this.offsetWidth * 100)
    value.innerText = `${percent}%`
    updateProcess(percent)
})

updateProcess(50)