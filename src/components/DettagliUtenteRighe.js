import React from "react";
export function DettagliUtenteRighe(props) {
  const { titolo } = props;
  const { valore } = props;
  return (
    <div style={{ display: "flex", flexDirection: "rows", marginTop: "auto" }}>
      <div style={{ position: "relative", bottom: -9 }}>{titolo}</div>
      <div
        style={{
          flex: 1,
          borderBottom: "1px dotted #000",
          margin: "4px 7px"
        }}
      ></div>
      <div
        style={{
          marginLeft: "auto",
          fontWeight: 800,
          fontSize: 20,
          color: "#000",
          position: "relative",
          bottom: -4
        }}
      >
        {valore}
      </div>
    </div>
  );
}
