import "./SideBar.css";

const SideBar = ({ sidebar }) => {

  if (!sidebar || sidebar.length === 0) {
    return (
      <>
        <div className="bg-danger text-center">
          <p className="fw-bold text-white pt-2">Failed to fetch - No content to display in the Sidebar and Title.</p>
          <span className="spinner-border spinner-border-sm mb-2 text-white"></span>
        </div>
      </>
    )
  }


  const elem = sidebar[0];

  return (
    <div className="sideBar">
      <h1 className="ps-5 pt-5 pb-3">{elem.h1}</h1>
      <p className="px-5 mb-4 fs-5">{elem.text}</p>
      <a href="/#" className="ps-5 fs-5 fw-bold text-decoration-none">
        Read-more...
      </a>
    </div>
  );
}

export default SideBar;