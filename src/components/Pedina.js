import React, { useState } from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

import { caselle } from "../tmpdata";

export default function Pedina(props) {
  const { utente } = props;
  const { chiave } = props;
  const posizioneUtente = caselle.find((c) => utente.punti === c.id);
  const scostamentoPosizioneX = 0 + chiave * 2;
  const scostamentoPosizioneY = 5 + chiave * 8;

  const [zindex, setZindex] = useState(500);
  const [x, setX] = useState(posizioneUtente.x + scostamentoPosizioneX);
  const [y, setY] = useState(posizioneUtente.y + scostamentoPosizioneY);

  const mouseEnterHandler = () => {
    //setZindex(501);
    //setX(posizioneUtente.x);
    // setY(posizioneUtente.y + scostamentoPosizioneY + 20);
  };

  const mouseLeaveHandler = () => {
    // setZindex(500);
    // setX(posizioneUtente.x + 30);
    // setY(posizioneUtente.y + scostamentoPosizioneY);
  };

  return (
    <Motion
      defaultStyle={{ left: 0, bottom: 0 }}
      style={{
        left: spring(x, { stiffness: 41, damping: 8 }),
        bottom: spring(y, { stiffness: 41, damping: 8 })
      }}
    >
      {(interpolatingStyle) => (
        <div
          style={{
            ...interpolatingStyle,
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
        </div>
      )}
    </Motion>
  );
}
