import React from "react";
import ImageLinkedCard from "./ImageLinkedCard";
import ImageCard from "./ImageCard";
import Wexter from '../Assets/Images/wexter.png';
import Upstream from '../Assets/Images/upstream.png';
import Efemia from '../Assets/Images/efemia.png';
import Verbal from '../Assets/Images/verbal.jpg';
import SectorAlarm from '../Assets/Images/sector_alarm.jpg';
import Beambox from '../Assets/Images/beambox.jpg';
import NickeBorg from '../Assets/Images/nicke_borg.jpg';
import Music from '../Assets/Images/music.png';
import Dashboard from '../Assets/Images/dashboard.jpg';
import PunkBeer from '../Assets/Images/punk_beer.png';
import iChores from '../Assets/Images/ichores.png';
import Washi from '../Assets/Images/washi.png';
import MobergsBistro from '../Assets/Images/mobergs_bistro.png';

class SectionBlock extends React.Component {
  renderImage = () => {
    const title = this.props.title;
    
    switch (title) {
      case 'Wexter':
        return <img src={Wexter} alt={this.props.title} />;

      case 'Upstream':
        return <img src={Upstream} alt={this.props.title} />;

      case 'Efemia':
        return <img src={Efemia} alt={this.props.title} />;

      case 'Verbal':
        return <img src={Verbal} alt={this.props.title} />;

      case 'Sector Alarm':
        return <img src={SectorAlarm} alt={this.props.title} />;

      case 'Beambox':
        return <img src={Beambox} alt={this.props.title} />;

      case 'Nicke Borg':
        return <img src={NickeBorg} alt={this.props.title} />;

      case 'Musikinstitutet':
        return <img src={Music} alt={this.props.title} />;

      case 'React JS Dashboard':
        return <img src={Dashboard} alt={this.props.title} />;

      case 'Ajax API':
        return <img src={PunkBeer} alt={this.props.title} />;

      case 'Vanilla JS Todo':
        return <img src={iChores} alt={this.props.title} />;

      case 'Washi':
        return <img src={Washi} alt={this.props.title} />;

      case 'Mobergs Bistro':
        return <img src={MobergsBistro} alt={this.props.title} />;

      default:
        return null
    }
  }
  render() {
    const isReversed = this.props.reverse;
    const cardShadows = this.props.shadowColors.map((color) =>
      <div key={color} className={"card-shadow " + color} />
    );
    const renderOfflineItem = this.props.offline ? <li className="color-orange">Offline</li> : null;
    const offline = this.props.offline;
    return (
      <section className="grid align-center">
        {!offline &&
          <ImageLinkedCard
            href={this.props.href}
            image={this.renderImage()}
            shadows={cardShadows}
            reversed={isReversed}
          />
        }
        {offline &&
          <ImageCard
            image={this.renderImage()}
            shadows={cardShadows}
            reversed={isReversed}
          />
        }
        <div className="column size-1of2">
          <h2>{this.props.title}</h2>
          <ul className="list">
            <li>{this.props.description}</li>
            <li className="monotype">{this.props.hashtags}</li>
            {renderOfflineItem}
          </ul>
        </div>
      </section>
    );
  }
}

export default SectionBlock;
