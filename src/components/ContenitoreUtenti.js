import React from "react";
import styled from "styled-components";
import ColonnaUtente from "./ColonnaUtente";
import DettagliUtente from "./DettagliUtente";

const StyledContenitoreUtenti = styled.div`
  width: 563px;
  height: 340px;
  /* border: 1px solid red; */
  position: absolute;
  left: 275px;
  top: 269px;
  display: flex;
`;

export default function ContenitoreUtenti(props) {
  const { utenti } = props;
  const { utenteSelezionato } = props;

  let returned = <></>;
  if (utenteSelezionato) {
    returned = (
      <StyledContenitoreUtenti
        style={{
          backgroundColor: "#88123A",
          opacity: "0.95",
          boxShadow: "rgb(51, 51, 51) 2px 2px 5px 2px",
          color: "white"
        }}
      >
        <DettagliUtente utente={utenteSelezionato}></DettagliUtente>
      </StyledContenitoreUtenti>
    );
  } else {
    returned = (
      <StyledContenitoreUtenti>
        {utenti.map((u, k) => (
          <ColonnaUtente key={k} utente={u}></ColonnaUtente>
        ))}
      </StyledContenitoreUtenti>
    );
  }
  return returned;
}
