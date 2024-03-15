const GameInfo = ({ currentPlayer, winner, isDraw }) => {
    return (
        <p className="info text-white">
            {winner ? `Победил ${winner}` : ''}
            {isDraw ? 'Ничья' : ''}
            {!winner && !isDraw ? `Ход: ${currentPlayer}` : ''}
        </p>
    )
}

export default GameInfo
