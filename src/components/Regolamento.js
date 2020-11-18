import React from "react";

export default function (props) {
  function handleClick() {
    window.open(
      "https://dev-hl.terotero.it/public/CuccopolyRegolamento.pdf",
      "_blank" // <- This is what makes it open in a new window.
    );
  }
  return (
    <button
      style={{
        position: "absolute",
        top: "135px",
        right: "97px",
        height: "50px",
        width: "155px",
        backgroundColor: "#88123A",
        border: "2px solid #fff",
        color: "#fff",
        fontFamily: "Times",
        fontSize: "15px",
        boxShadow: "1px 1px 2px 1px #999",
        cursor: "pointer"
      }}
      onClick={handleClick}
    >
      REGOLAMENTO
    </button>
  );
}
