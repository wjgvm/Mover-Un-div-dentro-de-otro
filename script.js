let leftMove, topMove;
const container = document.getElementById('container')
const box = document.getElementById('box')
container.addEventListener('mousemove', (element) => {
    // container.style.cursor = 'none'

    if((container.clientHeight - box.clientHeight) - element.offsetY >= 0 ){
        topMove = element.offsetY 
    }
    if((container.clientWidth - box.clientWidth) - element.offsetX >= 0 ){
        leftMove = element.offsetX
    }
    
    box.style.left = leftMove + 'px'
    box.style.top = topMove + 'px'
    
    box.innerText = `${leftMove } : ${topMove}`

})

