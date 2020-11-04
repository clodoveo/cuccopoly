import React from "react";

export function DettagliUtentePunteggio(props) {
  const { utente } = props;
  return (
    <div
      style={{
        border: "2px solid #871239",
        position: "absolute",
        right: 25,
        top: 15,
        borderRadius: "50%",
        padding: 2
      }}
    >
      <div
        style={{
          border: "1px solid #fff",
          borderRadius: "50%",
          width: 50,
          height: 50,
          textAlign: "center",
          color: "#fff",
          backgroundColor: "#871239",
          fontSize: 25,
          lineHeight: "48px"
        }}
      >
        <span>{utente.punti}</span>
      </div>
    </div>
  );
}
