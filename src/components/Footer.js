import React from "react";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "50px" }}>
      <span>&copy; {new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
