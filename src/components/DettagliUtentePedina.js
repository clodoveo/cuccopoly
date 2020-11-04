import React from "react";

export function DettagliUtentePedina(props) {
  const { utente } = props;
  return (
    <div
      style={{
        backgroundColor: utente.colore ? utente.colore : "#666",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "inline-block",

        boxShadow: "2px 2px 5px 2px #999",
        cursor: "pointer",
        border: "2px solid #fff",
        marginRight: "15px",
        flex: 1,
        justifySelf: "flex-start"
      }}
    >
      <span
        style={{
          fontSize: "40px",
          color: "white",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textTransform: "uppercase",
          fontFamily: "initial",
          fontWeight: "initial"
        }}
      >
        {utente.nome && utente.nome.charAt(0)}
      </span>
    </div>
  );
}
