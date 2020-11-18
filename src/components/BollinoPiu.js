import React from "react";

export default function BollinoPiu(props) {
  const { numeroBollinoPiu } = props;
  const { colore } = props;
  return (
    <div
      style={{
        fontWeight: 800,
        backgroundColor: colore,
        color: "white",
        borderRadius: "50%",
        width: 50,
        height: 50,
        zIndex: "5000",
        position: "absolute",
        fontSize: "25px",
        lineHeight: "50px",
        textAlign: "center",
        bottom: 0,
        right: -4
      }}
    >
      +{numeroBollinoPiu}
    </div>
  );
}
