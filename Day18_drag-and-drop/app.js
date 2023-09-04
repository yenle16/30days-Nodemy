var boxes = document.querySelectorAll('.box')
var targets = document.querySelectorAll('.target')

var currentTarget = null

targets.forEach(target => {
    target.addEventListener('dragstart', function(e) {
        this.classList.add('dragging')
        currentTarget = this
    })
    target.addEventListener('dragend', function(e) {
        this.classList.remove('dragging')
    })

})

//gragover
boxes.forEach(box => {
    box.addEventListener('dragover', function(e) {
        e.preventDefault()
    })
    box.addEventListener('drop', function(e) {
        if (!(box.querySelector('.target'))) {
            this.appendChild(currentTarget)
        }
    })
})