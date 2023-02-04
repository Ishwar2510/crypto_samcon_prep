import React from "react";
function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "grey",
        height: "20px",
       
        justifyContent: "space-between",
        padding: "15px",
      }}
    >
      <div id="left"></div>
      <div id="right">
        <button style={{ marginRight: "15px", borderRadius: "5px" }}>
          Signup
        </button>
        <button style={{ marginRight: "15px", borderRadius: "5px" }}>
          login
        </button>
      </div>
    </div>
  );
}

export default Header;
