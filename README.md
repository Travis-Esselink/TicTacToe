# Tic Tac Toe

Your Tic Tac Toe app must:

- Render a game in the browser

- Switch turns between X and O (or whichever markers you select)


- Visually display which side won or show a draw if neither player wins


- Use JavaScript for DOM manipulation

- Include separate HTML / CSS / JavaScript files

- Be deployed to GitHub Pages where the rest of the world can access it

- Use semantic markup (as much as possible) for HTML and CSS

FUNCTIONS LIST

- initialiseGame
    - sets gameStart to true
    - loops through all 9 squares adding an EventListener with parameters of 'click' and the alterSquare function
    - adds event listener to restart button with parameters 'click' and the restartGame function
    - updates the text that displays whose turn it is

- cellClicked
    - defines the cellIndex variable, which accesses the cellIndex attribute in the HTML file
    - if statement checks if the squares are blank or of the game is not running and does nothing if so. 
    - alterSquare function is then called with paramters this and cellIndex
    - checkWinner function also called

- updateCell
    - function parameters cell and index (to be filled with 'this'[the cell that has been clicked] and 'cellIndex' by above function[clickedCell])
    - takes options and the index that was inputted as a parameter (whichever cellIndex was clicked), sets the value to 'currentPlayer'. This changes the options[index] from a blank string to the string stored in the currentPlayer variable.
    - accesses the textContent from the cell and alters it to match the string stored in the currentPlayer variable.

- changePlayer
    - if statement checks if current player is equal to 'X'. If so, it changes currentPlayer to 'O'. If current player was not 'X', player changes to 'X'.
    - statusText gets updated to currentPlayer textContent

- checkWinner
    - variables are defined for 

- restartGame