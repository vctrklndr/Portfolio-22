const Header = ({ title, hashtags }) => {
  const preambleBlock = (
    <>
      Closing
      <span className="Color-EditorTeal"> &lt;/</span>
      <span className="Color-EditorRed">div</span>
      <span className="Color-EditorTeal">&gt;</span>
      's since 2018
    </>
  );

  return (
    <header className="Code">
      <div className="Code__Content">
        <h1 className="Code__Heading ">{title}</h1>
        <p className="Code__Preamble">{preambleBlock}</p>
        <p className="Code__Hashtags">{hashtags}</p>
      </div>
    </header>
  );
};

export default Header;
