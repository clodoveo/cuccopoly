import React from "react";
import Tabellone from "./components/Tabellone";
import ContenitoreUtenti from "./components/ContenitoreUtenti";
import Pedine from "./components/Pedine";
import { caselle, utenti } from "./tmpdata";

export default function App() {
  //console.log(utenti);
  return (
    <div className="App">
      <Tabellone caselle={caselle}>
        {<ContenitoreUtenti utenti={utenti} />}
        <Pedine utenti={utenti} />
      </Tabellone>
    </div>
  );
}
