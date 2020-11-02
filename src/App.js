import React, { useState, useEffect } from "react";
import Tabellone from "./components/Tabellone";
import ContenitoreUtenti from "./components/ContenitoreUtenti";
import Pedine from "./components/Pedine";
import { caselle } from "./tmpdata";

export default function App() {
  //console.log(utenti);

  const [utenteSelezionato, setUtenteSelezionato] = useState(false);
  const [vediFish, setVediFish] = useState(true);
  const [utenti, setUtenti] = useState(false);

  const settaUtente = (utente) => {
    setUtenteSelezionato(utente);
    setVediFish((old) => !old);
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(
        "https://dev-hl.terotero.it/api/gamification/users_agenzia/2/"
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
