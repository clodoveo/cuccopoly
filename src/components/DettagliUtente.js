import React from "react";
import { motion } from "framer-motion";
import { DettagliUtentePedina } from "./DettagliUtentePedina";
import { DettagliUtentePunteggio } from "./DettagliUtentePunteggio";
import { DettagliUtenteRighe } from "./DettagliUtenteRighe";

export default function DettagliUtente(props) {
  const { utente } = props;
  const { vediFish } = props;

  const varianti = {
    iniziale: {
      display: "none",
      opacity: 1,
      //clipPath: "circle(0px at 0px 0px)",
      //clipPath: "circle(1000px at 0px 0px)",
      flexDirection: "column",
      //rotateY: -45,
      rotateX: 0,
      rotateZ: 45,
      width: 150,
      height: 0
    },
    finale: {
      display: "flex",
      flexDirection: "column",
      opacity: 1,
      //clipPath: "circle(1000px at 0px 0px)",

      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      height: 300,
      width: 466,
      transition: {
        duration: 0.2
      }
    }
  };

  const animazione = vediFish ? "iniziale" : "finale";
  return (
    <motion.div
      animate={animazione}
      variants={varianti}
      style={{
        color: "#666",
        width: "calc(100% + 2px)",
        backgroundColor: "#fff",
        padding: "0px 50px",
        flexDirection: "column",
        position: "relative"
      }}
    >
      <div
        style={{
          fontSize: "30px",
          borderBottom: "1px solid #eee",
          textTransform: "capitalize",

          fontWeight: 600,
          color: "#000",
          padding: "20px 0"
        }}
      >
        <DettagliUtentePedina utente={utente} />
        <span style={{ textTransform: "uppercase" }}>{utente.nome}</span>
        <span
          style={{
            position: "absolute",
            top: "30px",
            right: "93px",
            fontSize: "24px",
            fontWeight: 300
          }}
        >
          Punti
        </span>
        <DettagliUtentePunteggio utente={utente} />
      </div>
      <DettagliUtenteRighe
        titolo="Numero Transazioni"
        valore={utente.NumeroTransazioni}
      />
      <DettagliUtenteRighe
        titolo="Numero Acquisizioni"
        valore={utente.NumeroAcquisizioni}
      />
      <DettagliUtenteRighe
        titolo="Numero Incarichi Home-Staging"
        valore={utente.NumeroIncarichiHomeStaging}
      />
      <DettagliUtenteRighe
        titolo="Numero Jolly Persi Per Penalità"
        valore={utente.NumeroJollyPersiPerPenalita}
      />
    </motion.div>
  );
}
