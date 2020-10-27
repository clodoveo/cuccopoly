import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { caselle } from "../tmpdata";

export default function Pedina(props) {
  const { utente } = props;
  const { chiave } = props;
  const { setUtenteSelezionato } = props;
  const posizioneUtente = caselle.find((c) => utente.punti === c.id);
  const scostamentoPosizioneX = 0 + chiave * 2;
  const scostamentoPosizioneY = 5 + chiave * 8;

  const [zindex, setZindex] = useState(500);
  const [x, setX] = useState(posizioneUtente.x + scostamentoPosizioneX);
  const [y, setY] = useState(posizioneUtente.y + scostamentoPosizioneY);

  const mouseEnterHandler = () => {
    setUtenteSelezionato(utente);
  };

  const mouseLeaveHandler = () => {
    setUtenteSelezionato(false);
  };

  return (
    <motion.div
      initial={{ x: 0, bottom: 0, scale: 1, rotate: 0 }}
      animate={{
        x: x,
        bottom: y,
        rotate: [0, 90, Math.random() * 15],
        scale: [1, 2.5, 1]
      }}
      transition={{
        duration: Math.random() + 0.5,
        delay: Math.random() + 1,
        ease: "easeIn"
      }}
      style={{
        backgroundColor: utente.colore,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        position: "absolute",

        zIndex: zindex,
        boxShadow: "2px 2px 5px 2px #333",
        cursor: "pointer",
        border: "2px solid #fff"
      }}
      title={utente.nome}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <span
        style={{
          fontSize: "40px",
          color: "white",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          textTransform: "uppercase"
          //border:"1px solid #fff"
        }}
      >
        {utente.nome.charAt(0)}
      </span>
    </motion.div>
  );
}
