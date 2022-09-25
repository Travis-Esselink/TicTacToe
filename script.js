
// define global variables
const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('#restartBtn')
const statusText = document.querySelector('#statusText')
const braceImg = '<img src = "images/bracePic.png">'
const wheelImg = '<img src = "images/wheelPic.png">'

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4 ,7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let options = ['', '', '', '', '', '', '', '', '', ]
let running = false
let currentPlayer = 'BRACE'
let currentPlayerPic = braceImg

// put game in playable state by starting initialize game function
initializeGame()


// function to initialize game, add click events to cells and restart button, set default status text

function initializeGame () {
    running = true
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartBtn.addEventListener('click', restartGame)
    statusText.textContent = `It is ${currentPlayer}'s turn`
}

// function to run the updateCell function, and check if a winner exists when a cell is clicked
function cellClicked () {
    const cellIndex = this.getAttribute('cellIndex')
    if (options[cellIndex] != '' || !running) {
        return
    } else {
        updateCell(this, cellIndex)
        checkWinner()
    }
}

// function to update cell 
function updateCell (cell, index) {
    cell.innerHTML = currentPlayerPic
    options[index] = currentPlayer
}

// function to switch players and update statusText
function changePlayer () {
    if (currentPlayer ==='BRACE') {
        currentPlayer = 'WHEEL'
        currentPlayerPic = wheelImg
    } else {
        currentPlayer = 'BRACE'
        currentPlayerPic = braceImg
    }
    statusText.textContent = `It is ${currentPlayer}'s turn`
}

// function to check if win conditions are met, announce winner or switch player if game still active
function checkWinner () {
    roundWon = false
    for (let winCondition in winConditions) {
        const condition = winConditions[winCondition]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if (cellA === '' || cellB === '' || cellC === '') {
            continue
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true
            break
        }
    } if (roundWon) {
        running = false
        statusText.textContent = `${currentPlayer} wins!`
    } else if (!options.includes('')) {
        running = false
        statusText.textContent = `It's a DRAW!`
    } else {
        changePlayer()
    }

}

// function clear baord using restartBtn
function restartGame () {
    running = true
    options = ['', '', '', '', '', '', '', '', '', ]
    currentPlayer = 'BRACE'
    currentPlayerPic = braceImg
    statusText.textContent = `It is ${currentPlayer}'s turn`
    cells.forEach(cell => cell.textContent = '')
}







