import React, { useState } from "react";
import Tabellone from "./components/Tabellone";
import ContenitoreUtenti from "./components/ContenitoreUtenti";
import Pedine from "./components/Pedine";
import { caselle, utenti } from "./tmpdata";

export default function App() {
  //console.log(utenti);

  const [utenteSelezionato, setUtenteSelezionato] = useState(false);

  return (
    <div className="App">
      <Tabellone caselle={caselle}>
        <ContenitoreUtenti
          utenti={utenti}
          utenteSelezionato={utenteSelezionato}
        />
        <Pedine utenti={utenti} setUtenteSelezionato={setUtenteSelezionato} />
      </Tabellone>
    </div>
  );
}
