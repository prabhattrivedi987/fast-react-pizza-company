import React from "react";

function Header() {
  //styling react component
  const style = {
    color: "#af8602",
    fontSize: "48px",
    textTransform: "uppercase",
    textAlign: "centre",
    letterSpacing: "3px",
    position: "relative",
    width: "100%",
    display: "block",
  };

  //     text-transform: uppercase;
  //   text-align: center;
  //   font-size: 5.2rem;
  //   font-weight: 300;
  //   letter-spacing: 3px;
  //   position: relative;
  //   width: 100%;
  //   display: block;
  return (
    <div className="header">
      {/* adding style inline */}
      <h1 style={style}>Fast React Pizza Co.</h1>
    </div>
  );
}

export default Header;
