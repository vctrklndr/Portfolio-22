import data from "../Data/Footer";

const Footer = () => {
  const { present, past, frojd, dazy, makingWaves, blipBlop } = data;

  return (
    <footer>
      <section className="section padding-bz text-center">
        <Heading {...present} />
        <div className="grid align-center justify-center">
          <Logo {...frojd} />
        </div>
        <Heading {...past} />
        <div className="grid align-center justify-center">
          <Logo {...dazy} />
          <Logo {...makingWaves} />
        </div>
      </section>
      <BlipBlop {...blipBlop} />
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

const BlipBlop = ({ text, href, linkText }) => {
  return (
    <div className="text-center">
      <p className="text-small">
        {text}
        <a className="link" href={href} rel="noreferrer">
          <span>{linkText}</span>
        </a>
      </p>
    </div>
  );
};

export default Footer;
