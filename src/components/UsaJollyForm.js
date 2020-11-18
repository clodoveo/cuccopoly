import React from "react";

export default function UsaJollyForm(props) {
  const disabledAvanza = true;
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div
      style={{
        backgroundColor: "#fff",
        position: "fixed",
        width: "467px",
        height: "318px",
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        placeContent: "center",
        padding: "20px 50px",
        top: "250px",
        left: "284px"
      }}
    >
      {" "}
      <button
        onClick={props.toggle}
        style={{
          border: "none",
          backgroundColor: "transparent",
          position: "absolute",
          top: "10px",
          right: "10px",
          fontWeight: "800",
          color: "#88123A"
        }}
      >
        X
      </button>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "rgb(255, 255, 255)",
          position: "fixed",
          display: "flex",
          placeItems: "center",
          padding: "20px 50px",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <div>
          <label>
            <h1 style={{ fontFamily: "Titillium Web" }}>Usa Jolly per:</h1>
          </label>
        </div>
        <br />
        <div style={{ marginBottom: "50px" }}>
          <select
            style={{
              height: "45px",
              border: "none",
              borderBottom: "1px solid #ccc",
              padding: "0 15px",
              fontSize: "17px"
            }}
          >
            <option selected>Seleziona...</option>
            <option value="avanzare" disabled={disabledAvanza}>
              Avanzare
            </option>
            <option value="ribasso prezzo non autorizzato">
              ribasso prezzo non autorizzato
            </option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            style={{
              height: "50px",
              width: "150px",
              backgroundColor: "#88123A",
              border: "2px solid #fff",
              color: "#fff",
              fontFamily: "Times",
              fontSize: "20px",
              boxShadow: "1px 1px 2px 1px #999",
              cursor: "pointer"
            }}
          >
            USA JOLLY
          </button>
        </div>
      </form>
    </div>
  );
}
