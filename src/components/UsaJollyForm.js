import { useReducedMotion } from "framer-motion";
import React, { useState } from "react";

export default function UsaJollyForm(props) {
  const [selectedValue, setSelectedValue] = useState("");
  const [causale, setCausale] = useState("");
  const { utenteCorrente } = props;

  let disabledAvanza = true;
  disabledAvanza = utenteCorrente.totali <= 30;

  async function handleSubmit(e) {
    e.preventDefault();

    var details = {
      cuccopoly_partita: utenteCorrente.partita,
      numero: 1,
      motivo: selectedValue === "avanzare" ? "avanzare" : causale,
      segno: "-",
      _user: utenteCorrente.id
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: formBody.join("&")
    };
    const res = await fetch(
      "https://dev-hl.terotero.it/api/gamification/usa_jolly/",
      requestOptions
    );
    const data = await res.json();
    document.location.reload();
    console.log(data);
  }

  function onSelectChangeHandler(e) {
    setSelectedValue(e.target.value);
    if (e.target.value === "ribasso prezzo non autorizzato") {
      setCausale("");
    }
  }

  function onCausaleChangeHandler(e) {
    setCausale(e.target.value);
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
          justifyContent: "space-between",
          flexDirection: "column",
          height: "319px"
        }}
      >
        <div>
          <label>
            <h1 style={{ fontFamily: "Titillium Web" }}>Usa Jolly per:</h1>
          </label>
        </div>

        <div>
          <select
            onChange={onSelectChangeHandler}
            style={{
              height: "45px",
              border: "none",
              borderBottom: "1px solid #ccc",
              padding: "0 15px",
              fontSize: "17px",
              width: "300px"
            }}
          >
            <option>Seleziona...</option>
            <option value="avanzare" disabled={disabledAvanza}>
              Avanzare
            </option>
            <option value="ribasso prezzo non autorizzato">
              ribasso prezzo non autorizzato
            </option>
          </select>
        </div>
        {selectedValue === "ribasso prezzo non autorizzato" && (
          <div>
            <input
              type="text"
              style={{
                height: "45px",
                fontSize: "17px",
                border: "none",
                borderBottom: "1px solid #ccc",
                paddingLeft: "5px",
                width: "300px"
              }}
              placeholder="inserisci riferimento e/o note"
              value={causale}
              onChange={onCausaleChangeHandler}
            />
          </div>
        )}
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
