import React from "react";

export default function DettagliUtente(props) {
  const { utente } = props;
  return (
    <div>
      <div>{utente.nome}</div>
      <div>Numero Transazioni: {utente.NumeroTransazioni}</div>
      <div>Numero Acquisizioni: {utente.NumeroAcquisizioni}</div>
      <div>
        Numero Incarichi Home-Staging: {utente.NumeroIncarichiHomeStaging}
      </div>
      <div>
        Numero Jolly Persi Per Penalità:{utente.NumeroJollyPersiPerPenalita}{" "}
      </div>
    </div>
  );
}
