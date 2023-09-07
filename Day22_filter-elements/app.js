// var btnList = document.querySelectorAll('button')
var imgList = document.querySelectorAll('.food img')
var foodContainer = document.querySelector('.food-container')
var btnList = document.querySelectorAll('.control button')
    //init data
var arr = []
imgList.forEach(item => {
    arr.push({
        src: item.src,
        type: item.getAttribute('type')
    })
})

btnList.forEach(btn => {
    btn.addEventListener('click', e => {

        let type = e.currentTarget.getAttribute('type')
        let filterData = []
        if (type === 'all') {
            filterData = arr

        } else {
            filterData = arr.filter(food => {
                return food.type == type
            })

        }
        render(filterData)
    })
})

function render(list) {
    // <div class="food">
    //         <img src="dessert1.jpg" alt="" type="dessert">
    //     </div>
    foodContainer.innerHTML = ''
    list.forEach(item => {
        let foodElement = document.createElement('div')
        console.log('div')
        foodElement.classList.add('food')

        foodElement.innerHTML = `
           <img src="${item.src}" alt="" type="${item.type}">
        
        `
        foodContainer.append(foodElement)
    })
}