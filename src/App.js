import Portfolio from './Components/Portfolio';
import Logos from './Components/Logos';
// import Victor from './Assets/Images/victor.jpg';
import "./Assets/Styles/App.scss";

function App() {
  return (
    <main className="app">
      <div className="container">
        <section className="grid align-center">
          <div className="column size-1of3">
            <div className="smiley">
              <div className="eye eye--left"></div>
              <div className="eye eye--right"></div>
              <div className="mouth"></div>
            </div>
            {/* <div className="circle">
              <img src={Victor} alt="It's me!" />
            </div> */}
          </div>
          <div className="column size-2of3">
            <div className="card-content bg-white">
              <h1 className="heading heading--large text-uppercase marginAz"><span className="color-orange">Victor</span> Kilander</h1>
              <p className="monotype marginBz">FRONT END DEVELOPER</p>
              <p className="monotype marginAz">#html5 #css #sass #less #js #jquery #php #git</p>
              <p className="monotype marginAz">Blippin' 'n bloppin' since 2019</p>
            </div>
          </div>
        </section>
        <Portfolio />
        <Logos />
      </div>
    </main>
  );
}

export default App;
