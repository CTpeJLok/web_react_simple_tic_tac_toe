const GameInfo = ({ currentPlayer, winner, isDraw }) => {
    if (winner)
        return <p className="info">Победил {winner}</p>
    
    if (isDraw)
        return <p className="info">Ничья</p>

    return <p className="info">Ход: {currentPlayer}</p>
}

export default GameInfo
