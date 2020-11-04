import React, { useState } from "react";
import styled from "styled-components";
import ColonnaUtente from "./ColonnaUtente";
import DettagliUtente from "./DettagliUtente";

const StyledContenitoreUtenti = styled.div`
  width: 566px;
  height: 340px;
  margin-left: 3px;
  font-family: "Titillium web";
  /* border: 1px solid red; */
  position: absolute;
  left: 275px;
  top: 269px;
  /* display: flex; */
  overflow-x: scroll;
  overflow-y: hidden;
  ::-webkit-scrollbar {
    width: 0px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #888;
  }
  ::-webkit-scrollbar-thumb {
    background: #871239;
  }
`;

export default function ContenitoreUtenti(props) {
  const { utenti } = props;
  const { utenteSelezionato } = props;
  const { vediFish } = props;

  let mStyle = {};
  if (!vediFish) {
    mStyle = {
      backgroundColor: "#88123A",
      opacity: "0.95",
      // boxShadow: "rgb(51, 51, 51) 2px 2px 5px 2px",
      color: "white"
    };
  }

  return (
    <StyledContenitoreUtenti style={mStyle}>
      <div
        style={{
          minWidth: 566,
          minHeight: 340,
          width: 95 * utenti.length,
          display: "flex"
        }}
      >
        {utenti.map((u, k) => (
          <ColonnaUtente key={k} utente={u} vediFish={vediFish}></ColonnaUtente>
        ))}
        <DettagliUtente
          utente={utenteSelezionato}
          vediFish={vediFish}
        ></DettagliUtente>
      </div>
    </StyledContenitoreUtenti>
  );
}
