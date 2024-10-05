import headerImage from "../public/game-logo.png";

function Header() {
  return (
    <header className="header">
      <img src={headerImage} alt="React Logo" />
      <h1>React Tic-Tac-Toe</h1>
    </header>
  );
}

export default Header;
