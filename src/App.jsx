import Player from "./components/Player";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <main id="game-container">
        <ol id="players">
          <Player initialName="Vincent" symbol="X" />
          <Player initialName="Computer" symbol="O" />
        </ol>
      </main>
    </>
  );
}

export default App;
