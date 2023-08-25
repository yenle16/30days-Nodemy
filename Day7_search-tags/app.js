var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var tags = ['Nodejs', 'Reactjs']
var btnremoveAll = document.querySelector('.remove-all')

function render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `<li>
        ${tag}
        <i class="fa-solid fa-times" onclick="removeTag(${i})"></i>
    </li>`
    }

    content.appendChild(input)
    input.focus()
}


function removeTag(index) {
    tags.splice(index, 1)
    render()
}

render()


input.addEventListener('keydown', function(e) {
    if (e.key == 'Enter') {
        tags.push(input.value.trim())
        render()
        input.value = ''
    }
})

btnremoveAll.addEventListener('click', function() {
    tags = []
    render()
})