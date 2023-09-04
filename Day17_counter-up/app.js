var elCounters = document.querySelectorAll('.counter')

function countUp(el, to) {
    var count = 0
    var time = 300
    var step = Math.round(to / time)

    let counting = setInterval(() => {
        count += step
        if (count > to) {
            clearInterval(counting)
            el.innerText = to
        } else {
            el.innerText = count
        }
    }, 1)

}
elCounters.forEach(item => {
    var el = item.children[1]
    var valueTo = item.children[1].innerText
    countUp(el, valueTo)
})