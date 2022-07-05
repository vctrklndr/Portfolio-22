import footer from "../Data/Footer";

const Footer = () => {
  return (
    <footer>
      <section className="section padding-bz text-center">
        <Heading {...footer.present} />
        <div className="grid align-center justify-center">
          <Logo {...footer.frojd} />
        </div>
        <Heading {...footer.past} />
        <div className="grid align-center justify-center">
          <Logo {...footer.dazy} />
          <Logo {...footer.makingWaves} />
        </div>
      </section>
      <BlipBlop />
    </footer>
  );
};

const Heading = ({ text }) => {
  return <h3 className="text-border inline-block margin-z">{text}</h3>;
};

const Logo = ({ href, image, alt }) => {
  return (
    <div className="column size-1of6">
      <a href={href} rel="noreferrer">
        <img className="logo" src={image} alt={alt} />
      </a>
    </div>
  );
};

const BlipBlop = () => {
  return (
    <div className="text-center">
      <p className="text-small">
        Blip blop –{" "}
        <a
          className="link"
          href="https://github.com/vctrklndr"
          rel="noreferrer"
        >
          <span>github.com/vctrklndr</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
