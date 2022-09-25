
WHEELS AND BRACES

GAME FEATURES: 

- 2 player naughts and crosses 
- restart functionality
- win / draw / player's turn announcement
- cool 60 series Toyota Landcruiser theme
- hover effect on game cells and restart button

ORIGINAL WIREFRAME LAYOUT: 


![](https://file%2B.vscode-resource.vscode-cdn.net/Users/Tr/Documents/General%20Assembly/tictactoe/images/WireFrame.png?version%3D1664146932812)

TECHNOLOGIES USED: 

- HTML
- CSS
- JAVASCRIPT

FUNCTIONS LIST

- initialiseGame
    - Sets gameStart to true
    - Loops through all 9 squares adding an EventListener with parameters of 'click' and the alterSquare function
    - Adds event listener to restart button with parameters 'click' and the restartGame function
    - Updates the text that displays whose turn it is

- cellClicked
    - Defines the cellIndex variable, which accesses the cellIndex attribute in the HTML file
    - If statement checks if the squares are blank or of the game is not running and does nothing if so. 
    - AlterSquare function is then called with paramters this and cellIndex
    - CheckWinner function also called

- updateCell
    - Function parameters cell and index (to be filled with 'this'[the cell that has been clicked] and 'cellIndex' by above function[clickedCell])
    - Takes options and the index that was inputted as a parameter (whichever cellIndex was clicked), sets the value to 'currentPlayer'. This changes the options[index] from a blank string to the string stored in the currentPlayer variable.
    - Accesses the textContent from the cell and alters it to match the string stored in the currentPlayer variable.

- changePlayer
    - If statement checks whether current player is equal to 'X'. If so, it changes currentPlayer to 'O'. If current player was not 'X', player changes to 'X'.
    - StatusText gets updated to currentPlayer textContent

- checkWinner
    - roundWon is defined as false
    - For loop defines variables for each windcondition in winconditions and each relevent win condition. Winning combinations are checked with if statements. 
    - If a winning combination is found, the loop is broken and roundwon is set to true, stopping the game. Otherwise, the game continues switching between each player.
    - If a winning combination is not found and all squares are no longer empty (!options.inclues('')), the game ends in a draw.

- restartGame
    - All significant variables are returned to their original state, running is set to true, and each cell has its text content replaced with the blank options matching those in the options array.

FUTURE IMPROVEMENTS (coming soon hopefully)

    - mobile responsive
    - audio even though it's annoying
    - score counter