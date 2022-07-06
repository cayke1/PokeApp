import { Ranking } from "./components/Ranking";
import './App.css';
import { Game } from "./components/Game";
import { CookieModal } from "./components/CookieModal";

const cookies = localStorage.getItem('cookies');
function App() {
  return (
    <div className="app">
        <Ranking />
        <Game />
        {cookies ? '' : <CookieModal />}
    </div>
  )
}

export default App;
