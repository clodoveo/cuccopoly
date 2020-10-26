import React from "react";
import Pedina from "./Pedina";
import { countBy } from "lodash";

export default function Pedine(props) {
  const { utenti } = props;
  const contaParimerito = countBy(utenti, "punti");
  console.log(contaParimerito);
  return (
    <>
      {utenti.map((u, k) => (
        <Pedina
          key={k}
          chiave={k}
          utente={u}
          contaParimerito={contaParimerito}
        />
      ))}
    </>
  );
}
