function Header() {
  return (
    <section className="grid align-center">
      <div className="column size-1of1">
        <div className="card-content bg-editor-black">
          <h1 className="heading heading--large monotype text-uppercase marginAz">
            <span className="color-editor-yellow">
              Victor Kilander
            </span>
          </h1>
          <p className="monotype marginBz color-editor-green">
            FRONT END DEVELOPER – Blippin' 'n bloppin' since 2018
          </p>
          <p className="monotype text-small marginAz color-editor-teal">
            #html5 #css #sass #less #js #jquery #php #git
          </p>
        </div>
      </div>
    </section>
  );
}

export default Header;