import React from "react";
import styled from "styled-components";
import ColonnaUtente from "./ColonnaUtente";

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

  return (
    <StyledContenitoreUtenti>
      {utenti.map((u, k) => (
        <ColonnaUtente key={k} utente={u}></ColonnaUtente>
      ))}
    </StyledContenitoreUtenti>
  );
}
