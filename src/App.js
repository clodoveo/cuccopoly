import React, { useState, useEffect } from "react";
import Tabellone from "./components/Tabellone";
import ContenitoreUtenti from "./components/ContenitoreUtenti";
import Pedine from "./components/Pedine";
import { caselle } from "./tmpdata";

export default function App() {
  const [utenteSelezionato, setUtenteSelezionato] = useState(false);
  const [vediFish, setVediFish] = useState(true);
  const [utenti, setUtenti] = useState(false);

  const settaUtente = (utente) => {
    setUtenteSelezionato(utente);
    setVediFish((old) => !old);
  };

  const getQueryParams = (params, url) => {
    let href = url;
    //this expression is to get the query strings
    let reg = new RegExp("[?&]" + params + "=([^&#]*)", "i");
    let queryString = reg.exec(href);
    return queryString ? queryString[1] : null;
  };

  useEffect(() => {
    const getUsers = async () => {
      const agenziaPar = getQueryParams("agenzia", window.location.href);

      const par = agenziaPar ? agenziaPar : 1;
      const res = await fetch(
        "https://dev-hl.terotero.it/api/gamification/users_agenzia/" + par + "/"
      );
      const users = await res.json();
      setUtenti(users);
    };
    getUsers();
  }, []);

  return utenti ? (
    <div className="App">
      <Tabellone caselle={caselle}>
        <ContenitoreUtenti
          utenti={utenti}
          utenteSelezionato={utenteSelezionato}
          vediFish={vediFish}
        />
        <Pedine utenti={utenti} setUtenteSelezionato={settaUtente} />
      </Tabellone>
    </div>
  ) : (
    <>LOADING...</>
  );
}
