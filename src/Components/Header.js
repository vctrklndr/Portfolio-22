const Header = ({ title, preamble, hashtags }) => {
  return (
    <header>
      <div className="column size-1of1">
        <div className="card-content bg-editor-black">
          <h1 className="heading heading--large monotype text-uppercase margin-z">
            <span className="color-editor-yellow">{title}</span>
          </h1>
          <p className="monotype margin-bz color-almost-white">{preamble}</p>
          <p className="monotype text-small margin-z color-editor-teal">
            {hashtags}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
