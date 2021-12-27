const board = document.querySelector('#board')
const colors = ['#5D737E', '#64B6AC', '#C0FDFB', '#DAFFEF', '#FCFFFD']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => { 
        setColor(square)
    })

    square.addEventListener('mouseleave', () => { 
        removeColor(square)
    })

    board.append(square)

}

function setColor(square) {
    square.style.background = getColor()
    square.style.boxShadow = `0 0 2px ${getColor()}, 0 0 10px ${getColor()}`
}

function removeColor(square) {
    square.style.background = '#1d1d11'
    square.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    index = Math.floor(Math.random() * colors.length)
    return colors[index]
}