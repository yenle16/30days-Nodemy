var successBtn = document.querySelector('.control .success')
var warningBtn = document.querySelector('.control .warning')
var errorBtn = document.querySelector('.control .error')

successBtn.addEventListener('click', function() {
    createToast('success', 6000)
})

warningBtn.addEventListener('click', function() {
    createToast('warning', 6000)
})

errorBtn.addEventListener('click', function() {
    createToast('error', 6000)
})



function createToast(status, timeout) {

    let templateInner = ``
    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a Success message</span>`
            break
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a Warning message</span>`
            break
        case 'error':
            templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a Error message</span>`
            break
    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}  
        <span class="countdown"></span>`
    var toastList = document.querySelector('#toasts')
    toastList.appendChild(toast)

    setTimeout(function() {
        toast.style.animation = 'slide_hide 2s ease forwards'
    }, timeout)

    setTimeout(function() {
        toast.remove()
    }, timeout + 1500)


}