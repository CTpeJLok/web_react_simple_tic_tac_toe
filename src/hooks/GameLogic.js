import { useState } from "react"

const PLAYER_X = 'X'
const PLAYER_O = 'O'

const winPositions = [
    [0,1,2],  // hor
    [3,4,5],
    [6,7,8],
    [0,3,6],  // vert
    [1,4,7],
    [2,5,8],
    [0,4,8],  // diag
    [2,4,6],
]

const GameLogic = () => {
    let [currentPlayer, setCurrentPlayer] = useState(PLAYER_X)
    let [board, setBoard] = useState(Array(9).fill(null))
    let [winner, setWinner] = useState()

    const clickCell = (index) => {
        if (board[index] || winner || isDraw)
            return

        let newBoard = board.slice()
        newBoard[index] = currentPlayer

        setCurrentPlayer(currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X)
        setWinner(checkWin(newBoard))
        setBoard(newBoard)
    }

    const checkWin = (board) => {
        let isWinPos, positions

        for (const winPos of winPositions) {
            isWinPos = true
            let last = board[winPos[0]]

            if (!last)
                continue

            for (const pos of winPos.slice(1)) {
               if (board[pos] !== last) {
                isWinPos = false
                break
               } 
            }

            if (isWinPos) {
                positions = winPos
                break
            }
        }

        if (isWinPos)
            return positions

        return
    }

    const resetGame = () => {
        setCurrentPlayer(PLAYER_X)
        setBoard(Array(9).fill(null))
        setWinner()
    }

    const isDraw = !winner && board.filter(i => i).length === 9

    return {
        board,
        currentPlayer,
        winner,
        isDraw,
        clickCell,
        resetGame,
    }
}

export default GameLogic
