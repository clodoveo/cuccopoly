import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BollinoPiu from "./BollinoPiu";

const StyledColonnaUtente = styled.div`
  position: relative;
  width: 93px;
  border-right: 2px dashed #ccc;
`;

const BollinoUtente = styled.div`
  width: 83px;
  height: 83px;
  border-radius: 50%;
  position: absolute;
  top: 6px;
  left: 6px;
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
  const { vediFish } = props;
  const [statoAnimazione, setStatoAnimazione] = useState(false);

  useEffect(() => setStatoAnimazione(true), []);

  const listaJolly = [];
  for (let i = 0; i < utente.jolly; i++) {
    if (i < 3) {
      listaJolly.push(
        <motion.div
          key={i}
          animate={statoAnimazione ? { y: 88 + i * 80 } : { y: 88 + i * 80 }}
          transition={{ delay: i * 0.3, duration: (i + 1) * 0.5 }}
        >
          <Jolly src="https://hlimmobiliare.it/img/original/JollyRound.png"></Jolly>
        </motion.div>
      );
    }
  }
  const bollinoPiu = utente.jolly - 3;

  const colore = utente.colore ? utente.colore : "#666";
  const fondini = [];
  for (let i = 0; i < 3; i++) {
    fondini.push(
      <div
        style={{
          width: 79,
          height: 79,
          borderRadius: "50%",
          border: "1px dashed " + colore,
          position: "absolute",
          top: 89 + i * 80,
          left: 7,
          textAlign: "center",
          color: colore,
          fontSize: 75,
          webkitTextFillColor:
            "transparent" /* Will override color (regardless of order) */,
          webkitTextStrokeWidth: 1,
          webkitTextStrokeColor: colore,
          strokeDasharray: 2
        }}
      >
        <svg version="1.1" xmlns="//www.w3.org/2000/svg" width="100%">
          <text
            class="stroke-text"
            x="50%"
            y="45%"
            style={{
              textAlign: "center",
              textAnchor: "middle",
              stroke: colore,
              strokeWidth: 1,
              fill: "none"
            }}
          >
            J
          </text>
        </svg>
      </div>
    );
  }

  let mstyle = {};
  if (!vediFish) {
    mstyle = { display: "none" };
  }

  return (
    <StyledColonnaUtente style={mstyle}>
      <BollinoUtente style={{ backgroundColor: colore }}>
        <Elefantino
          alt="what"
          src="https://hlimmobiliare.it/img/original/elephant-icon.png"
        />
        <NomeUtente>{utente.nome}</NomeUtente>
      </BollinoUtente>
      {fondini}
      {listaJolly}
      {bollinoPiu > 0 && (
        <BollinoPiu numeroBollinoPiu={bollinoPiu} colore={colore} />
      )}
    </StyledColonnaUtente>
  );
}
