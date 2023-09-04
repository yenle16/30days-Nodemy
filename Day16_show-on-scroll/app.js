var animationElements = document.querySelectorAll('.show-on-scroll')

function toggleAnimationElementInWindow(element) {
    var rect = element.getClientRects()
    var heightScreen = window.innerHeight

    //Check xem element co ben trong man hinh hay khong
    if (!(rect[0].bottom < 0 || rect[0].top > heightScreen)) {

        console.log(rect[0].bottom)
            //Ben trong man hinh
        element.classList.add('start')
    } else {
        //Ben ngoai man hinh
        element.classList.remove('start')
    }
}

function checkAnimation() {

    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el)
    })

}

window.onscroll = function() {
    console.log(1)
    checkAnimation()
}