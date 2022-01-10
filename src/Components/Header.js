function Header() {
  return (
    <header>
      <div className="column size-1of1">
        <div className="card-content bg-editor-black">
          <h1 className="heading heading--large monotype text-uppercase margin-z">
            <span className="color-editor-yellow">
              Victor Kilander
            </span>
          </h1>
          <p class="monotype margin-bz color-almost-white">
            Closing
            <span class="color-editor-red">
              <span class="color-editor-teal"> &lt;/</span>
              div
              <span class="color-editor-teal">&gt;</span>
            </span>
            's since 2018
          </p>
          <p className="monotype text-small margin-z color-editor-teal">
            #html5 #css #sass #less #js #jquery #php #git
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;