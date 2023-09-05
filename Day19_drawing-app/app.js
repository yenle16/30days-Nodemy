var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext("2d")

// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(300, 150);
// ctx.stroke();

var pos1 = {
    x: 0,
    y: 0
}


var pos2 = {
    x: 0,
    y: 0
}

//init
var isDrawing = false
var colorPaint = '#000000'
var size = 5

document.addEventListener('mousedown', function(e) {
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true

})

document.addEventListener('mousemove', function(e) {
    pos2 = {
        x: e.offsetX,
        y: e.offsetY
    }
    if (isDrawing) {

        //fill net ve
        ctx.beginPath();
        ctx.arc(pos1.x, pos1.y, size, 0, 2 * Math.PI);
        ctx.fillStyle = colorPaint
        ctx.fill();

        //ve outline
        ctx.beginPath();
        ctx.moveTo(pos1.x, pos1.y);
        ctx.lineTo(pos2.x, pos2.y);
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = size
        ctx.stroke();
        pos1.x = pos2.x
        pos1.y = pos2.y
    }
})

document.addEventListener('mouseup', function(e) {
    isDrawing = false
})

color.addEventListener('change', function(e) {
    colorPaint = e.target.value
})

eraser.addEventListener('click', function() {
    colorPaint = '#ffffff'
})

decrease.addEventListener('click', function() {
    size -= 5
    size = size > 5 ? size : 5
    sizeEl.innerHTML = size

})

increase.addEventListener('click', function() {
    size += 5
    size = size < 30 ? size : 30
    sizeEl.innerHTML = size
})

clear.addEventListener('click', function() {
    var canvasStats = canvas.getClientRects()
    ctx.clearRect(0, 0, canvasStats[0].width, canvasStats[0].height)
})

save.addEventListener('click', function() {
    var output = canvas.toDataURL()
    save.setAttribute('href', output)
})