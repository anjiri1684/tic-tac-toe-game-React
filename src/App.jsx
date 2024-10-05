import Player from "./components/Player";
import Header from "./Header";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }
  return (
    <>
      <Header />
      <main id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Vincent"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Computer"
            symbol="O"
            isActive={activePlayer == "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </main>
    </>
  );
}

export default App;
