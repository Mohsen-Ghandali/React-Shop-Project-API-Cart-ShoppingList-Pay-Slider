import "./Footer.css";
import React from "react";

const Footer = ({ footer }) => {
  if (!footer) {
    return (
      <>
        <div className="bg-danger text-center">
          <p className="fw-bold text-white pt-2">Failed to fetch - No content to display in the Footer.</p>
          <span className="spinner-border spinner-border-sm mb-2 text-white"></span>
        </div>
      </>
    );
  }

  return (
    <footer className="bg-white text-center pt-2 pb-3">
      {footer.map((elem) => (
        <a href="/#" className="mx-3" key={elem.id}>
          <img src={elem.socialMedia} alt={elem.alt} />
        </a>
      ))}
    </footer>
  );
};

export default Footer;
