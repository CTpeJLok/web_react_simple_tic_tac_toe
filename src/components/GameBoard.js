import Cell from "./Cell"

const GameBoard = ({ board, winner, clickCell }) => {
    return (
        <div className="board">
            {board.map((cell, index) =>
                <Cell key={index} cell={cell} winner={winner?.includes(index)} clickCell={() => clickCell(index)} />
            )}
        </div>
    )
}

export default GameBoard
