import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import Footer from "./Components/Footer";
import items from "./Data/Items";
import header from "./Data/Header";
import "./Assets/Styles/App.scss";

function App() {
  return (
    <div className="app">
      <Header {...header} />
      <main>
        <Portfolio items={items} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
