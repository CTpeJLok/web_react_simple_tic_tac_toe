import GameInfo from "./components/GameInfo"
import GameBoard from "./components/GameBoard"
import ResetButton from "./components/ResetButton"
import GameLogic from "./hooks/GameLogic"

function App() {
  let { board, currentPlayer, winner, isDraw, clickCell, resetGame } = GameLogic()

  return (
    <div className="game bg-info">
      <GameInfo currentPlayer={currentPlayer} winner={winner ? board[winner[0]] : null} isDraw={isDraw} />
      <GameBoard board={board} winner={winner} clickCell={clickCell} />
      <ResetButton resetGame={resetGame} />
    </div>
  )
}

export default App
