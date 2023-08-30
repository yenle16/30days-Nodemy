var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')


async function changeWeatherUI() {
    let capitalSearch = search.value.trim()
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=06d819ee4c12210423eed262816f648c`
    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod == 200) {
        content.classList.remove('hide')

        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15))
        value.innerText = temp
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')
        if (temp > 30) {
            body.setAttribute('class', 'hot')
        } else {
            body.setAttribute('class', 'cold')
        }

    } else {
        content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e) {
    if (e.code === "Enter") {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)

    }
})

changeWeatherUI('Ha Noi')