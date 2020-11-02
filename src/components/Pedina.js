import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { caselle } from "../tmpdata";

export default function Pedina(props) {
  const { utente } = props;
  const { chiave } = props;
  const { setUtenteSelezionato } = props;
  const posizioneUtente = caselle.find((c) => utente.punti === c.id);
  const scostamentoPosizioneX = 0 + chiave * 2;
  const scostamentoPosizioneY =
    5 + 5 * utente.posizione_in_casella * utente.utenti_in_casella;

  const [zindex] = useState(500);
  const [x] = useState(posizioneUtente.x + scostamentoPosizioneX);
  const [y] = useState(posizioneUtente.y + scostamentoPosizioneY);
  const [statoAnimazione, setStatoAnimazione] = useState("iniziale");

  useEffect(() => setStatoAnimazione("finale"), []);

  const mouseEnterHandler = () => {
    setUtenteSelezionato(utente);
  };

  const mouseLeaveHandler = () => {
    setUtenteSelezionato(false);
  };

  const varianti = {
    iniziale: { x: 0, bottom: 0, scale: 1, rotate: 1 },
    finale: {
      x: x,
      bottom: y,
      rotate: [0, 90, Math.random() * 15],
      scale: [1, 2.5, 1],
      transition: {
        duration: Math.random() + 0.5,
        //delay: Math.random() + 1,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.div
      initial={{}}
      animate={statoAnimazione}
      variants={varianti}
      whileHover={{ scale: 1.4, zIndex: 501, transition: { duration: 0.5 } }}
      style={{
        backgroundColor: utente.colore ? utente.colore : "#666",
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
      <motion.span
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
      </motion.span>
    </motion.div>
  );
}
