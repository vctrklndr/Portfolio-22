import SectionBlock from './Components/SectionBlock';
import Logos from './Components/Logos';
import Victor from './Assets/Images/victor.jpg';
import Verbal from './Assets/Images/verbal.jpg';
import SectorAlarm from './Assets/Images/sector_alarm.jpg';
import Beambox from './Assets/Images/beambox.jpg';
import NickeBorg from './Assets/Images/nicke_borg.jpg';
import Music from './Assets/Images/music.png';
import Dashboard from './Assets/Images/dashboard.jpg';
import "./Assets/Styles/App.scss";

function App() {
  return (
    <main className="app">
      <div className="container">
        <section className="grid grid-gap-2 align-center">
          <div className="column size-1of1 size-m-1of2 size-l-1of3">
            <div className="circle">
              <img src={Victor} alt="It's me!" />
            </div>
          </div>
          <div className="column size-1of1 size-m-1of2 size-l-2of3">
            <div className="card-content bg-white">
              <h1 className="heading heading--large text-uppercase marginAz"><span className="color-orange">Victor</span> Kilander</h1>
              <p className="monotype marginBz">FRONT END DEVELOPER</p>
              <p className="monotype marginAz">#html5 #css #sass #less #js #jquery #php #git</p>
              <p className="monotype marginAz">Blippin' 'n bloppin' since 2019</p>
            </div>
          </div>
        </section>

        <SectionBlock
          image={Verbal}
          title="Verbal"
          description="Frontend for Verbal web"
          hashtags="#html #php #cssl #sass #js #jquery #wordpress"
          shadowColors={['bg-purple', 'bg-pink']}
        />

        <SectionBlock
          image={SectorAlarm}
          title="Sector Alarm"
          description="Frontend for Sector Alarms new public web"
          hashtags="#html #nunjucks #fractal #css #less #js #vanilla #jquery"
          reverse={true}
          shadowColors={['bg-red', 'bg-orange']}
        />

        <SectionBlock
          image={Beambox}
          title="Beambox"
          description="Frontend for Beambox web"
          hashtags="#html #razor #css #less"
          shadowColors={['bg-purple', 'bg-light-pink']}
          offline={true}
        />

        <SectionBlock
          image={NickeBorg}
          title="Nicke Borg"
          description="Basic new website for Nicke Borg Homeland"
          hashtags="#html #css"
          reverse={true}
          shadowColors={['bg-teal', 'bg-blue']}
        />

        <SectionBlock
          image={Music}
          title="Musikinstitutet"
          description="School assignment in Vanilla JS"
          hashtags="#html #css #sass #js #vanilla"
          shadowColors={['bg-gold', 'bg-yellow']}
        />

        <SectionBlock
          image={Dashboard}
          title="React JS Dashboard"
          description="School assignment for a dashboard in React JS"
          hashtags="#html #css #js #react"
          shadowColors={['bg-pink', 'bg-blue']}
          reverse={true}
        />
        <Logos />
      </div>
    </main>
  );
}

export default App;
