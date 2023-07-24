import HeaderNav from "./HeaderNav";

const Header = ({ header }) => {
  if (!header || header.length === 0) {
    return (
      <>
        <div className="bg-danger text-center">
          <p className="fw-bold text-white pt-2">Failed to fetch - No content to display in the Header and Navigation.</p>
          <span className="spinner-border spinner-border-sm mb-2 text-white"></span>
        </div>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-dark-emphasis" href="/#">Logo</a>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">

            <ul className="navbar-nav gap-4 ">

              {header && header.map((elem) => {
                return (
                  <HeaderNav nav={elem} key={elem.id} />
                )
              })}

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;