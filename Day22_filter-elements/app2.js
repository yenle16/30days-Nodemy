var imgList = document.querySelectorAll('img')
btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        let type = e.currentTarget.getAttribute('type')
        imgList.forEach(img => {
            let foodType = img.getAttribute('type')
            if (type === 'all' || foodType === type) {
                img.classList.remove('hide')
            } else {
                img.classList.add('hide')
            }

        })

    })
})