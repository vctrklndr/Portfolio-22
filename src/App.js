import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
import Logos from './Components/Logos';
import "./Assets/Styles/App.scss";

function App() {
  return (
    <main className="app">
      <div className="container">
        <Header />
        <Portfolio />
        <Logos />
      </div>
    </main>
  );
}

export default App;
