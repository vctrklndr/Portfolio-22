import Logos from "./Logos";
const Footer = () => {
  return (
    <footer>
      <Logos />
      <div className="text-center">
        <p className="text-small">
          Blip blop –{" "}
          <a
            className="link"
            href="https://github.com/vctrklndr"
            target="_blank"
            rel="noreferrer"
          >
            <span>github.com/vctrklndr</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
