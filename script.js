
// define global variables
const cells = document.querySelectorAll('.cell')
const restartBtn = document.querySelector('#restartBtn')
const statusText = document.querySelector('#statusText')

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let options = ['', '', '', '', '', '', '', '', '',]
let currentPlayer = 'X'
let running = false

// put game in playable state by starting initialize game function
initializeGame()

// function to initialize game, add click events to cells and restart button, set default status text
function initializeGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    statusText.textContent = `It is ${currentPlayer}'s turn`
    restartBtn.addEventListener('click', restartGame)
    running = true
}

// function to run the updateCell function, and check if a winner exists when a cell is clicked
function cellClicked() {
    const cellIndex = this.getAttribute('cellIndex')
    if (options[cellIndex] != '' || !running) {
        return
    } else {
        updateCell(this, cellIndex)
        checkWinner()
    }
}

// function to update cell 
function updateCell(cell, index) {
    options[index] = currentPlayer
    cell.textContent = currentPlayer
}

// function to switch players and update statusText
function changePlayer() {
    if (currentPlayer === 'X') {
        currentPlayer = 'O'
    } else {
        currentPlayer = 'X'
    }
    statusText.textContent = `It is ${currentPlayer}'s turn`
}

// function to check if win conditions are met, announce winner or switch player if game still active
function checkWinner() {
    let roundWon = false
    for (let winCondition in winConditions) {
        const condition = winConditions[winCondition]
        const cellA = options[condition[0]]
        const cellB = options[condition[1]]
        const cellC = options[condition[2]]

        if (cellA == '' || cellB == '' || cellC == '') {
            continue
        }
        if (cellA == cellB && cellB == cellC) {
            roundWon = true
            break
        }
    }
    if (roundWon) {
        running = false
        statusText.textContent = `${currentPlayer} wins!`
    } else if (!options.includes('')) {
        running = false
        statusText.textContent = `It's a draw!`
    } else {
        changePlayer()
    }


}

// function clear baord using restartBtn
function restartGame() {
    options = ['', '', '', '', '', '', '', '', '',]
    currentPlayer = 'X'
    statusText.textContent = `It is ${currentPlayer}'s turn`
    running = true
    cells.forEach(cell => cell.textContent = '')

}

