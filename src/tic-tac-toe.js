class TicTacToe {
    constructor() {
        this.gameField = [[null, null, null],       //Game Field with 9 cells
                          [null, null, null],
                          [null, null, null]];
        this.currentPlayer = 'x';                   //Start with X
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] === null) {
            this.gameField[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x') ? 'o': 'x';
        }
    }

    isFinished() {
        return (this.noMoreTurns() || this.getWinner()) ? true : false;
    }

    getWinner() {
        let winner = null;
        for(let i = 0; i < this.gameField.length; i++){
            if(this.gameField[i][0] === this.gameField[i][1] && this.gameField[i][0] === this.gameField[i][2])
                winner = this.gameField[i][0];
            else if(this.gameField[0][i] === this.gameField[1][i] && this.gameField[0][i] === this.gameField[2][i])
                winner = this.gameField[0][i];
        }
        if(winner === null) {
            if((this.gameField[0][0] === this.gameField[1][1] && this.gameField[0][0] === this.gameField[2][2])
            || (this.gameField[0][2] === this.gameField[1][1] && this.gameField[0][2] === this.gameField[2][0]))
                winner = this.gameField[1][1];
        }
        return winner;
    }

    noMoreTurns() {
        for(let row of this.gameField) 
            for(let symbol of row)
                if(symbol === null)
                    return false;
        return true;
    }

    isDraw() {
        return (this.noMoreTurns() && !this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;