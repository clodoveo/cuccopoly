import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const StyledColonnaUtente = styled.div`
  position: relative;
  width: 93px;
`;

const BollinoUtente = styled.div`
  width: 83px;
  height: 83px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 8px;
  overflow: hidden;
`;

const Jolly = styled.img`
  display: block;
  width: 83px;
  height: 83px;
  position: absolute;

  left: 6px;
`;

const Elefantino = styled.img`
  width: 59px;
  position: absolute;
  top: 20px;
  left: 7px;
`;

const NomeUtente = styled.div`
  position: absolute;
  left: 25px;
  top: 17px;
  color: #fff;
  text-transform: capitalize;
`;

export default function ColonnaUtente(props) {
  const { utente } = props;

  const listaJolly = [];
  for (let i = 0; i < utente.jolly; i++) {
    listaJolly.push(
      <Motion
        key={i}
        defaultStyle={{ top: 0 }}
        style={{
          top: spring(88 + i * 80, { stiffness: 41, damping: 8 })
        }}
      >
        {(interpolatingStyle) => (
          <Jolly
            src="https://dev-hl.terotero.it/img/original/JollyRound.png"
            style={interpolatingStyle}
          ></Jolly>
        )}
      </Motion>
    );
  }

  return (
    <StyledColonnaUtente>
      <BollinoUtente style={{ backgroundColor: utente.colore }}>
        <Elefantino
          alt="what"
          src="https://hlimmobiliare.it/img/original/elephant-icon.png"
        />
        <NomeUtente>{utente.nome}</NomeUtente>
      </BollinoUtente>
      {listaJolly}
    </StyledColonnaUtente>
  );
}
